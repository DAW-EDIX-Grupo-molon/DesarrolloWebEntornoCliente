// Variable para almacenar los datos cargados del servidor
let data;

// Constantes simulando la conexión a servidor para la práctica
const URL = "http://127.0.0.1:5500/AE-2/Laura/ajax.html";
const RECURSO = "pizzeria.json";

document.addEventListener("DOMContentLoaded", function () {
    cargar();
    actualizar.onclick = cargar;
    submit.onclick = procesarPedido;
});

function cargar() {
    let xmlHttp = new XMLHttpRequest();

    xmlHttp.open('GET', URL + RECURSO, true);
    xmlHttp.send(null);

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                procesarRespuesta(this.responseText);
                // No es necesario llamar a calcularPrecio aquí, ya que se llama después de procesarRespuesta
            } else {
                alert("No se han podido cargar los elementos");
            }
        }
    }
}

function procesarRespuesta(responseText) {
    // Procesar la respuesta y almacenar los datos
    data = JSON.parse(responseText);

    // Cargar tamaños de pizza
    loadPizzaSizes(data.tamañosP);

    // Cargar ingredientes
    loadIngredients(data.ingredientesP);

    // Puedes realizar otras acciones según sea necesario, como actualizar dinámicamente el formulario
}

function loadPizzaSizes(sizes) {
    const tamañoContainer = document.getElementById('tamañoContainer');

    // Limpiar contenido existente
    tamañoContainer.innerHTML = '';

    sizes.forEach(tamaño => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'tamaño';
        input.value = tamaño.tamaño;

        const label = document.createElement('label');
        label.textContent = `${tamaño.tamaño} (${tamaño.precio}€)`;

        const br = document.createElement('br');

        tamañoContainer.appendChild(input);
        tamañoContainer.appendChild(label);
        tamañoContainer.appendChild(br);
    });
}

function loadIngredients(ingredients) {
    const ingredientesContainer = document.getElementById('ingredientesContainer');

    // Limpiar contenido existente
    ingredientesContainer.innerHTML = '';

    ingredients.forEach(ingrediente => {
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'ingredientes';
        input.value = ingrediente.ingrediente;

        const label = document.createElement('label');
        label.textContent = `${ingrediente.ingrediente} (+${ingrediente.precio}€)`;

        const br = document.createElement('br');

        ingredientesContainer.appendChild(input);
        ingredientesContainer.appendChild(label);
        ingredientesContainer.appendChild(br);
    });
}

function calcularPrecio() {
    const tamañoPizza = document.querySelector('input[name="tamaño"]:checked');
    const ingredientes = document.querySelectorAll('input[name="ingredientes"]:checked');

    if (!tamañoPizza) {
        alert("Debe seleccionar un tamaño");
        return;
    }
    if (ingredientes.length === 0) {
        alert("Debes seleccionar mínimo un ingrediente");
        return;
    }

    
    const precioBase = data.tamañosP.find(tamaño => tamaño.tamaño === tamañoPizza.value)?.precio || 0;

    
    const precioIngredientes = Array.from(ingredientes).reduce((total, ingrediente) => {
        const precio = data.ingredientesP.find(i => i.ingrediente === ingrediente.value)?.precio || 0;
        return total + precio;
    }, 0);

    const precioTotal = precioBase + precioIngredientes;

    document.getElementById('totalPedido').textContent = precioTotal + '€';
}

function procesarPedido() {
    // Obtenemos información del formulario
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const tamañoPizza = document.querySelector('input[name="tamaño"]:checked');
    const ingredientes = document.querySelectorAll('input[name="ingredientes"]:checked');


    if (!tamañoPizza || ingredientes.length === 0) {
        alert("Error: Debes seleccionar un tamaño y al menos un ingrediente antes de procesar el pedido.");
        return;
    }


    const tamañoSeleccionado = data.tamañosP.find(tamaño => tamaño.tamaño === tamañoPizza.value);
    const ingredientesSeleccionados = Array.from(ingredientes).map(ingrediente => {
        return data.ingredientesP.find(i => i.ingrediente === ingrediente.value);
    });

    // Calcular el precio total 
    const precioTotal = tamañoSeleccionado.precio + ingredientesSeleccionados.reduce((total, ingrediente) => total + ingrediente.precio, 0);

    enviarPedidoAlServidor({
        nombre,
        direccion,
        telefono,
        email,
        tamaño: tamañoSeleccionado,
        ingredientes: ingredientesSeleccionados,
        precioTotal
    });

    alert("¡Pedido procesado con éxito!");
}

// Simulamos BD y URL de destino
const URL = "https://daw-edix-grupo-molon.github.io/DesarrolloWebEntornoCliente/AE-2/Luxmy/";
const RECURSO = "pizzeria.json";


function cargarDatos() {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', URL + RECURSO, true);
    xmlHttp.send(null);

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                procesarRespuesta(this.responseText);
            } else {
                alert("¡Error en la obtención de datos!");            }
        }
    };
}

cargarDatos();

// Esta función carga los datos de los ingredientes y tamaños
function procesarRespuesta(jsonDoc) {
    let objetoJson = JSON.parse(jsonDoc);

    // Cargar tamaños
    let tamañoContenedor = document.getElementById('tamañoContenedor');
    tamañoContenedor.innerHTML = '';

    objetoJson.pizzeria.tamaños.forEach(tamaño => {
        let input = document.createElement('input');
        input.name = 'tamaños';
        input.type = 'radio';
        input.value = tamaño.nombre;

        let label = document.createElement('label');
        label.textContent = `${tamaño.nombre} (+${tamaño.precio}€)`;

        let br = document.createElement('br');

        tamañoContenedor.appendChild(input);
        tamañoContenedor.appendChild(label);
        tamañoContenedor.appendChild(br);
    });

    // Cargar ingredientes
    let ingredientesContenedor = document.getElementById('ingredientesContenedor');
    ingredientesContenedor.innerHTML = ''; 

    objetoJson.pizzeria.ingredientes.forEach(ingrediente => {
        let input = document.createElement('input');
        input.name = 'ingredientes';
        input.type = 'checkbox';
        input.value = ingrediente.nombre;

        let label = document.createElement('label');
        label.textContent = `${ingrediente.nombre} (+${ingrediente.precio}€)`;

        let br = document.createElement('br');

        ingredientesContenedor.appendChild(input);
        ingredientesContenedor.appendChild(label);
        ingredientesContenedor.appendChild(br);
    });

    function refrescarDatos() {
        cargarDatos();
    }
}
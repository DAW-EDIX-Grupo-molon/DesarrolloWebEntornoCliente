//Función para crear etiquetas
function createLabel(id, text) {
    let label = document.createElement("label");
    label.id = "label" + id;
    label.setAttribute("for", id);
    label.textContent = text;
    dynamicItems.appendChild(label);
}

//Función para crear input
function createInput(id, type, name, value) {
    let myInput = document.createElement("input");
    myInput.type = type;
    myInput.id = id;
    myInput.name = name;
    myInput.value = value;
    dynamicItems.appendChild(myInput);
}

//Función para crear saltos de linea
function createBr() {
    let br = document.createElement("br");
    dynamicItems.appendChild(br);
}

//Path donde se encuentra el archivo JSON
const RECURSO = "precios.json"

//Función para cargar el archivo JSON que ejecuta la función recibida como parámetro al completar la llamada
function cargarJson(action) {

    let xmlHttp = new XMLHttpRequest();

    xmlHttp.open('GET', RECURSO, true)
    xmlHttp.send(null)

    xmlHttp.onload = function () {
        action(this.responseText)
    }
    xmlHttp.onerror = function () {
        console.log("ERROR ACCEDIENDO AL JSON")
    }

}

//Función que dado los datos del JSON crea el HTML correspondiente
function cargarDatos(jsonDoc) {
    var objetoJson = JSON.parse(jsonDoc)

    var tamañosPizzas = objetoJson.tamañosPizza;

    createBr();
    createLabel("pizzaSize", "Elija el tamaño de la pizza(*):");
    createBr();

    for (let indice in tamañosPizzas) {
        let optionText = tamañosPizzas[indice];
        createInput(optionText.tamaño, "radio", "size", optionText.precio)
        createLabel(optionText.tamaño, "Pizza " + optionText.tamaño + " " + optionText.precio + "€")
        createBr();
    }

    createLabel("ingredients", "Elija los ingredientes para la pizza(*):");
    createBr();

    var ingredientesPizzas = objetoJson.ingredientesPizza;

    ingredientesPizzas.forEach(function (optionText) {
        createInput(optionText.ingrediente, "checkbox", "ingredientes", optionText.precio)
        createLabel(optionText.ingrediente, optionText.ingrediente + " " + optionText.precio + "€")
        createBr();
    });

}

//Función para borrar los ingredientes y tamaños al pulsar el boton refresh
function borrarDynamicItems() {
    const element = document.getElementById("dynamicItems");
    element.replaceChildren();
    cargarJson(cargarDatos);
}

//Función para mostrar un mensaje en el cual se muestra que debe rellenarse el campo
function mensajeError() {
    let mensaje = document.createElement("div");
    mensaje.className = "error";
    mensaje.style = "color:red;font-weight:bold;margin-bottom:10px;";
    let error = document.createTextNode("Introduzca un valor adecuado en el campo");
    mensaje.appendChild(error);
    return mensaje;
}

//Función para quitar los mensajes de error anteriores
function limpiarErrores() {
    let mensajesError = document.getElementsByClassName("error");

    while (mensajesError.length > 0) {
        mensajesError[0].remove();
    }
}

//Función de validación que comprueba si un telefono es válido
function isValidPhone(phone) {
    //Nos hemos documentado para conseguir la expresión regular
    let regex = /^(\+34|0034|34)?[6789]\d{8}$/;
    return regex.test(phone);
}

//Función de validación que comprueba si un correo es válido
function isValidMail(mail) {
    //Nos hemos documentado para conseguir la expresión regular
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(mail);
}

//Validación de elementos
function validacion() {
    console.log("Validando...")
    limpiarErrores();

    let boolean = true;

    //Validación campos texto
    if (nombre.value.trim() == "") {
        nombre.after(mensajeError());
        boolean = false;
    }

    if (direccion.value.trim() == "") {
        direccion.after(mensajeError());
        boolean = false;
    }

    if (!isValidPhone(telefono.value)) {
        telefono.after(mensajeError());
        boolean = false;
    }

    if (!isValidMail(email.value)) {
        email.after(mensajeError());
        boolean = false;
    }

    //Validación radio button
    let size = document.getElementsByName("size");

    let radio = false;

    for (var i = 0; i < size.length; i++) {
        if (size[i].checked) {
            radio = true;
            break;
        }
    }

    if (!radio) {
        labelpizzaSize.after(mensajeError());
        boolean = false;
    }

    //Validación checkbox button
    let ingredientes = document.getElementsByName("ingredientes");

    let tieneIngredientes = false;

    for (var i = 0; i < ingredientes.length; i++) {
        if (ingredientes[i].checked) {
            tieneIngredientes = true;
            break;
        }
    }

    if (!tieneIngredientes) {
        labelingredients.after(mensajeError());
        boolean = false;
    }

    return boolean;
}

//Pinta el precio
function pintarPrecio(precio) {
    let textRestultado = document.createTextNode("El precio de su pizza es: ");
    resultado.appendChild(textRestultado);

    let precioTotal = document.createTextNode(precio + "€");

    resultado.appendChild(precioTotal);
}


//Busca los inputs seleccionados y a partir del JSON calcula el precio
function procesarPrecio(jsonDoc) {
    var objetoJson = JSON.parse(jsonDoc)

    var tamañosPizzas = objetoJson.tamañosPizza;
    var precioTamaño = 0;

    let size = document.getElementsByName("size");
    for (var i = 0; i < size.length; i++) {
        
        if (size[i].checked) {
            for (let indice in tamañosPizzas) {
                if(size[i].id ==tamañosPizzas[indice].tamaño){
                    precioTamaño=parseInt(tamañosPizzas[indice].precio);
                }
            }
            break;
        }
    }

    var ingredientesPizzas = objetoJson.ingredientesPizza;
    var precioIngrediente = 0;
    let ingredientesCheckbox = document.getElementsByName("ingredientes");

    ingredientesCheckbox.forEach(function (checkbox) {
        if(checkbox.checked) {
            for (let indice in ingredientesPizzas) {
                if(checkbox.id == ingredientesPizzas[indice].ingrediente){
                    precioIngrediente += parseInt(ingredientesPizzas[indice].precio);
                }
            }
        }
    });

    var precioTotal = precioIngrediente + precioTamaño;

    pintarPrecio(precioTotal);
}

//Cuando termina de cargar la página lanza la petición para recuperar el JSON y pintar el resto de elementos HTML
window.onload = cargarJson(cargarDatos);

//Lanza la validación de los input y en caso de ser correcta calcula el precio
document.getElementById("procesar").onclick = function (e) {
    resultado.innerHTML = '';

    /*Aquí comprobamos que el formulario tiene los valores adecuados en sus respectivos campos*/
    if (!validacion()) {
        let mensaje = document.createElement("div");
        mensaje.style = "color:red;font-weight:bold;margin-bottom:10px;";
        mensaje.className = "error";

        let textRestultado = document.createTextNode("Por favor, complete todos los campos obligatorios");
        mensaje.appendChild(textRestultado);

        resultado.appendChild(mensaje);

        e.preventDefault();
    } else {
        cargarJson(procesarPrecio);


        e.preventDefault();
    }
};

//Borrar los datos introducidos en la primera petición e introduce modificaciones.
document.getElementById("refresh").onclick = borrarDynamicItems;
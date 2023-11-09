
function createLabel(id, text) {
    let label = document.createElement("label");
    label.id = "label" + id;
    label.setAttribute("for", id);
    label.textContent = text;
    dynamicItems.appendChild(label);
}

function createInput(id, type, name, value) {
    let myInput = document.createElement("input");
    myInput.type = type;
    myInput.id = id;
    myInput.name = name;
    myInput.value = value;
    dynamicItems.appendChild(myInput);
}

function createBr() {
    let br = document.createElement("br");
    dynamicItems.appendChild(br);
}

const RECURSO = "precios.json"

function peticionAjax() {

    let xmlHttp = new XMLHttpRequest();

    xmlHttp.open('GET', RECURSO, true)
    xmlHttp.send(null)

    xmlHttp.onload = function () {
        procesarRespuesta(this.responseText)
    }
    xmlHttp.onerror = function () {
        console.log("Ajax no logrado")
    }

}

function procesarRespuesta(jsonDoc) {
    var objetoJson = JSON.parse(jsonDoc)

    console.log(objetoJson)

    var tamañosPizzas = objetoJson.tamañosPizza;

    createBr();
    createLabel("pizzaSize", "Elija el tamaño de la pizza(*):");
    createBr();

    for (let indice in tamañosPizzas) {
        let optionText = tamañosPizzas[indice];
        createInput(optionText.tamaño, "radio", "size", optionText.precio)
        createLabel(optionText.tamaño, "Pizza " + optionText.tamaño + " " +optionText.precio +"€")
        createBr();
    }

    createLabel("ingredients", "Elija los ingredientes para la pizza(*):");
    createBr();

    var ingredientesPizzas = objetoJson.ingredientesPizza;

    ingredientesPizzas.forEach(function (optionText) {
        createInput(optionText.ingrediente, "checkbox", "ingredientes", optionText.precio)
        createLabel(optionText.ingrediente,optionText.ingrediente+ " " +optionText.precio +"€")
        createBr();
    });

}
function borrarDynamicItems() {
    const element = document.getElementById("dynamicItems");
    element.replaceChildren();
    peticionAjax();
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


myForm.onsubmit = function (e) {
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
        let textRestultado = document.createTextNode("El precio de su pizza es: ");
        resultado.appendChild(textRestultado);

        //Tamaño seleccionado
        size = document.getElementsByName("size");

        let precioTamano = 0;

        for (var i = 0; i < size.length; i++) {
            if (size[i].checked) {
                precioTamano = parseInt(size[i].value)
                break;
            }
        }

        //Ingredientes seleccionados
        let ingredientes = document.getElementsByName("ingredientes");

        let contadorIng = 0;

        for (let i = 0; i < ingredientes.length; i++) {
            if (ingredientes[i].checked) {
                contadorIng += 1;
            }
        }

        let precioTotal = document.createTextNode(precioTamano + contadorIng + "€");

        console.log(precioTotal);

        resultado.appendChild(precioTotal);

        e.preventDefault();
    }
}

window.onload = peticionAjax();

document.getElementById("procesar").onclick = validacion;
document.getElementById("refresh").onclick = borrarDynamicItems;
// Método no usado!!
// Este método genera el html manipulando el arbol DOM
function addElements() {
    const contenedor = document.getElementById("contenedor");

    const form = document.createElement("form");
    form.method = "get";
    form.id = "form1"
    contenedor.appendChild(form)

    function createLabel(id, text) {
        let label = document.createElement("label");
        label.setAttribute("for", id);
        label.textContent = text;
        form.appendChild(label);
    }

    function createInput(id, type, name, value) {
        let myInput = document.createElement("input");
        myInput.type = type;
        myInput.id = id;
        myInput.name = name;
        myInput.value = value;
        form.appendChild(myInput);
    }

    function createBr() {
        let br = document.createElement("br");
        form.appendChild(br);
    }

    createLabel("nombre", "Nombre");
    createBr();
    createInput("nombre", "text", "nombre", "");
    createBr();
    createLabel("direccion", "Dirección");
    createBr();
    createInput("direccion", "text", "direccion", "");
    createBr();
    createLabel("telefono", "Teléfono");
    createBr();
    createInput("telefono", "text", "telefono", "");
    createBr();
    createLabel("email", "E-mail");
    createBr();
    createInput("email", "text", "email", "");
    createBr();
    createLabel("pizzaSize", "Elija el tamaño de la pizza(*):");
    createBr();

    const sizes = ["pequeña", "mediana", "grande"];

    for (let indice in sizes) {
        let optionText = sizes[indice];
        createInput(optionText, "radio", "size", indice * 5)
        createLabel(optionText, "Pizza " + optionText)
        createBr();
    }

    createLabel("ingredients", "Elija los ingredientes para la pizza(*):");
    createBr();

    const interesesOptions = ["Beacon", "Atún", "Salchichas", "Huevo"];
    interesesOptions.forEach(function (optionText) {
        createInput(optionText, "checkbox", optionText, 1)
        createLabel(optionText, optionText)
        createBr();
    });

    const btn = document.createElement("button");
    btn.type = "submit";
    btn.id = "submit";
    btn.value = "Submit";
    btn.textContent = "Submit";
    form.appendChild(btn);

}
// window.onload = addElements;


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
        grandeLabel.after(mensajeError());
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
        huevoLabel.after(mensajeError());
        boolean = false;
    }

    return boolean;
}


form1.onsubmit = function (e) {
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

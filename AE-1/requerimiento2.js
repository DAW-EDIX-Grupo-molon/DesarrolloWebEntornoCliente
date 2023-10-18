
function addElements() {
    const contenedor = document.getElementById("contenedor");

    /*Añadimos los primero elementos que nos piden que son los campos de texto: DNI, NOmbre, Apellidos, Direccion y Telefono */

    function createLabel(id, text) {
        let label = document.createElement("label");
        label.setAttribute("for", id);
        label.textContent = text;
        contenedor.appendChild(label);
    }

    function createInput(id, type, name, value) {
        let myInput = document.createElement("input");
        myInput.type = type;
        myInput.id = id;
        myInput.name = name;
        myInput.value = value;
        contenedor.appendChild(myInput);
    }

    function createBr() {
        let br = document.createElement("br");
        contenedor.appendChild(br);
    }

    createLabel("nombre", "Nombre");
    createBr();
    createInput("nombre", "text", "nombre", "Pepe");
    createBr();
    createLabel("direccion", "Dirección");
    createBr();
    createInput("direccion", "text", "direccion", "Avenida España");
    createBr();
    createLabel("telefono", "Teléfono");
    createBr();
    createInput("telefono", "text", "telefono", 666666666);
    createBr();
    createLabel("email", "E-mail");
    createBr();
    createInput("email", "text", "email", "prueba@gmail.com");
    createBr();
    createLabel("pizzaSize", "Elija el tamaño de la pizza(*):");
    createBr();

    const sizes = ["pequeña", "mediana", "grande"];

    for(let indice in sizes) {
        let optionText = sizes [indice];
        createInput(optionText, "radio", "size", indice*5)
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
}

window.onload = addElements;
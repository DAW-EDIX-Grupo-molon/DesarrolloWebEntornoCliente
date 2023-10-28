// Función para crear y agregar elementos al contenedor
function addElements() {
    const contenedor = document.getElementById("contenedor");

    // Crear un formulario
    const formulario = document.createElement("form");
    formulario.setAttribute("id", "formulario");
    contenedor.appendChild(formulario);

    // Añadimos los primero elementos que nos piden que son los campos de texto: DNI, Nombre, Apellidos, Direccion y Telefono
    const dniInput = document.createElement("input");
    dniInput.type = "text";
    dniInput.placeholder = "DNI";
    formulario.appendChild(dniInput);

    const nombreInput = document.createElement("input");
    nombreInput.type = "text";
    nombreInput.placeholder = "Nombre";
    formulario.appendChild(nombreInput);

    const apellidosInput = document.createElement("input");
    apellidosInput.type = "text";
    apellidosInput.placeholder = "Apellidos";
    formulario.appendChild(apellidosInput);

    const direccionInput = document.createElement("input");
    direccionInput.type = "text";
    direccionInput.placeholder = "Dirección";
    formulario.appendChild(direccionInput);

    const telefonoInput = document.createElement("input");
    telefonoInput.type = "text";
    telefonoInput.placeholder = "Teléfono";
    formulario.appendChild(telefonoInput);

    formulario.appendChild(document.createElement("hr"))

    /*Añadir dos radios button con 4 opciones*/
    /*Primer radio button*/
    const generoLabel = document.createElement("label");
    generoLabel.textContent = "Género:";
    formulario.appendChild(generoLabel);

    const generoOptions = ["Masculino", "Femenino", "Otro", "No especificar"];
    generoOptions.forEach(function (optionText) {
        const radioLabel = document.createElement("label");
        radioLabel.textContent = optionText;
        radioLabel.setAttribute("for", optionText)
        formulario.appendChild(radioLabel);

        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "genero";
        radioInput.id = optionText;
        radioLabel.appendChild(radioInput);
    });

    formulario.appendChild(document.createElement("hr"))

    /*Segundo radio button*/
    const modalidadLabel = document.createElement("label");
    modalidadLabel.textContent = "Modalidad de trabajo:";
    formulario.appendChild(modalidadLabel);

    const modalidadOptions = ["Presencial", "Teletrabajo", "Hibrido", "Indiferente"];
    modalidadOptions.forEach(function (optionText) {
        const radioLabel = document.createElement("label");
        radioLabel.textContent = optionText;
        radioLabel.setAttribute("for", optionText)
        formulario.appendChild(radioLabel);

        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "modalidad";
        radioInput.id = optionText;
        radioLabel.appendChild(radioInput);
    });

    formulario.appendChild(document.createElement("hr"))

    //Añadir 5 checkboxes
    const interesesLabel = document.createElement("label");
    interesesLabel.textContent = "Intereses:";
    formulario.appendChild(interesesLabel);

    const interesesOptions = ["Deporte", "Arte", "Música", "Lectura", "Viajes"];
    interesesOptions.forEach(function (optionText) {
        const checkboxLabel = document.createElement("label");
        checkboxLabel.textContent = optionText;
        checkboxLabel.setAttribute("for", optionText)
        formulario.appendChild(checkboxLabel);

        const checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";
        checkboxInput.name = "intereses";
        checkboxInput.id = optionText;
        checkboxLabel.appendChild(checkboxInput);
    });

    formulario.appendChild(document.createElement("hr"))

    //Añadir dos imagenes
    var img1 = document.createElement("img");
    img1.src = "imagen/toyota.png";
    formulario.appendChild(img1);

    var img2 = document.createElement("img");
    img2.src = "imagen/lol.jpeg";
    formulario.appendChild(img2);

    formulario.appendChild(document.createElement("hr"))

    // Añadir un Select
    const selectLabel = document.createElement("label");
    selectLabel.textContent = "Elige un turno de trabajo:";
    formulario.appendChild(selectLabel);

    const selectInput = document.createElement("select");
    const selectOptions = ["Mañana", "Tarde", "Noche"];
    selectOptions.forEach(function (optionText) {
        const option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        selectInput.appendChild(option);
    });
    formulario.appendChild(selectInput);

    formulario.appendChild(document.createElement("hr"))

    // Añadir un Textarea
    const textareaLabel = document.createElement("label");
    textareaLabel.textContent = "Comentarios:";
    formulario.appendChild(textareaLabel);

    const textareaInput = document.createElement("textarea");
    textareaInput.rows = 4;
    textareaInput.cols = 50;
    formulario.appendChild(textareaInput);
}

window.onload = addElements;

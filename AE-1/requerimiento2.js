
function addElements() {
    const contenedor = document.getElementById("contenedor");

    /*Añadimos los primero elementos que nos piden que son los campos de texto: DNI, NOmbre, Apellidos, Direccion y Telefono */

    function createLabel(id, text) {
        let label = document.createElement("label");
        label.setAttribute("for", id);
        label.textContent = text;
        contenedor.appendChild(label);
    }

    function createInput(id, type) {
        let myInput = document.createElement("input");
        myInput.type = type;
        myInput.id = id;

        contenedor.appendChild(myInput);
    }

    function createBr() {
        let br = document.createElement("br");
        contenedor.appendChild(br);
    }

    createLabel("nombre", "Nombre");
    createInput("nombre", "text");
    createBr();
    createInput("direccion", "text");
    createLabel("direccion", "Dirección");
    createBr();
    createLabel("telefono", "Teléfono");
    createInput("telefono", "phone");
    createBr();
    createLabel("email", "E-mail");
    createInput("email", "email");
    createBr();


    /*Añadir dos radios button con 4 opciones*/
    /*Primer radio button*/
    const generoLabel = document.createElement("label");
    generoLabel.textContent = "Género:";
    contenedor.appendChild(generoLabel);

    const generoOptions = ["Masculino", "Femenino", "Otro", "No especificar"];
    generoOptions.forEach(function (optionText) {
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "genero";
        radioInput.id = optionText;
        contenedor.appendChild(radioInput);

        const radioLabel = document.createElement("label");
        radioLabel.textContent = optionText;
        radioLabel.setAttribute("for", optionText)
        contenedor.appendChild(radioLabel);
    });

    /*Segundo radio button*/
    const modalidadLabel = document.createElement("label");
    modalidadLabel.textContent = "Modalidad de trabajo:";
    contenedor.appendChild(modalidadLabel);

    const modalidadOptions = ["Presencial", "Teletrabajo", "Hibrido", "Indiferente"];
    modalidadOptions.forEach(function (optionText) {
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "modalidad";
        radioInput.id = optionText;
        contenedor.appendChild(radioInput);

        const radioLabel = document.createElement("label");
        radioLabel.textContent = optionText;
        radioLabel.setAttribute("for", optionText)
        contenedor.appendChild(radioLabel);
    });

    //Añadir 5 checkboxes
    const interesesLabel = document.createElement("label");
    interesesLabel.textContent = "Intereses:";
    contenedor.appendChild(interesesLabel);

    const interesesOptions = ["Deporte", "Arte", "Música", "Lectura", "Viajes"];
    interesesOptions.forEach(function (optionText) {
        const checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";
        checkboxInput.name = "intereses";
        checkboxInput.id = optionText;
        contenedor.appendChild(checkboxInput);

        const checkboxLabel = document.createElement("label");
        checkboxLabel.textContent = optionText;
        checkboxLabel.setAttribute("for", optionText)
        contenedor.appendChild(checkboxLabel);
    });

    //Añadir dos imagenes
    var img1 = document.createElement("img");
    img1.src = "imagen/toyota.png";
    contenedor.appendChild(img1);

    var img2 = document.createElement("img");
    img2.src = "imagen/lol.jpeg";
    contenedor.appendChild(img2);

    // Añadir un Select
    const selectLabel = document.createElement("label");
    selectLabel.textContent = "Elige un turno de trabajo:";
    contenedor.appendChild(selectLabel);

    const selectInput = document.createElement("select");
    const selectOptions = ["Mañana", "Tarde", "Noche"];
    selectOptions.forEach(function (optionText) {
        const option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        selectInput.appendChild(option);
    });
    contenedor.appendChild(selectInput);

    // Añadir un Textarea
    const textareaLabel = document.createElement("label");
    textareaLabel.textContent = "Comentarios:";
    contenedor.appendChild(textareaLabel);

    const textareaInput = document.createElement("textarea");
    textareaInput.rows = 4;
    textareaInput.cols = 50;
    contenedor.appendChild(textareaInput);
}

window.onload = addElements;
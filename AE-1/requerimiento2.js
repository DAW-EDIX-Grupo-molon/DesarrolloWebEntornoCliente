
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
window.onload = addElements;
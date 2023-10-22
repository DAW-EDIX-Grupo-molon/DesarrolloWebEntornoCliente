/*
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
*/

//Función para mostrar un mensaje en el cual se muestra que debe rellenarse el campo
function mensajeError(){
    let mensaje = document.createElement("span");
    mensaje.style="color:red;font-weight:bold;margin-bottom:10px;";
    let error = document.createTextNode("Introduzca un valor adecuado en el campo");
    mensaje.appendChild(error);
    return mensaje;
}

//Validación de elementos
function validacion () {

    console.log("Validando...")
    
    let boolean = true;
    
    //Validación campos texto
    if(nombre.value.trim()=="") {
        nombre.after(document.createElement("br"),mensajeError());
        boolean = false;
    }

    if(direccion.value.trim()=="") {
        direccion.after(document.createElement("br"),mensajeError());
        boolean = false;
    }

    if(telefono.value.trim()=="") {
        telefono.after(document.createElement("br"),mensajeError());
        boolean = false;
    }

    if(email.value.trim()=="") {
        email.after(document.createElement("br"),mensajeError());
        boolean = false;
    }

    //Validación radio button
    size = document.getElementsByName("size");
    console.log(size);
    let radio = false;

    for(var i=0;i<size.length;i++){
        if(size[i].checked){
           radio=true;
           break;
        }
    }

    if(!radio){
        grandeLabel.after(document.createElement("br"),mensajeError());
        boolean=false;
    }

    return boolean;
}

form1.onsubmit = function(e) {

    /*Aquí comprobamos que el formulario tiene los valores adecuados en sus respectivos campos*/
    if(!validacion()){
        
        let mensaje = document.createElement("span");
        mensaje.style="color:red;font-weight:bold;margin-bottom:10px;";
        
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
        
        for(var i=0;i<size.length;i++){
            if(size[i].checked){
                precioTamano=parseInt(size[i].value)
               break;
            }
        }

        //Ingredientes seleccionados
        let ingredientes = document.getElementsByName("ingredientes");
        
        let contadorIng = 0;

        for (let i=0;i<ingredientes.length;i++){
            if(ingredientes[i].checked){
                contadorIng+=1;
            }
        }

        let precioTotal=document.createTextNode(precioTamano+contadorIng+"€");

        console.log(precioTotal);

        resultado.appendChild(precioTotal);
        
        e.preventDefault();
    
    }
    
}
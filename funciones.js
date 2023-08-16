//variables globales 
const d= document;
let campoTexto = d.querySelector(".texto");
let botonCrear = d.querySelector(".boton");
let tabla =d.querySelector("table tbody");

botonCrear.addEventListener("click", function(){
    //alert("el usuario escribio    " + campoTexto.value);
    crearTarea ();
}
);
let contar = 0
function crearTarea (){
    if (campoTexto.value == ""){
        alert("debes Escribir una tarea");
        return;
    }
    let fila = d.createElement("tr");
    fila.innerHTML = `
    <td> <span class="contador"> ${contar++} </span> </td> 
    <td> <span class="nuevaTarea"> ${campoTexto.value} </span> </td>
    <td> <span class="botonEditar" onclick="editarTarea(this);"> ✍ </span> </td>
    <td> <span class="botonEliminar" onclick="eliminarTarea();"> ❌ </span> </td>
    `;
    tabla.appendChild(fila);
}

function eliminarTarea(){
    let botonEliminar = d.querySelector(".botonEliminar");
    let cofirmar = confirm("desea Eliminar esta tarea?");
    if (cofirmar){
        botonEliminar.parentElement.parentElement.remove();
}
}

campoTexto.addEventListener("keyup", function(e){
// console.log(e);
if (e.key == "Enter"){
    crearTarea();
}
})

// function editarTarea(){
    // let botonEditar = d.querySelector(".botonEditar");
    // let confirmar = confirm("desea Editar esta tarea?");
    // if (confirmar){
        // botonEditar.parentElement.();
// 
    // }
// }

function editarTarea(icon) {
    let encontrar = icon.closest("tr"); 
    let botonEditar = encontrar.querySelector(".nuevaTarea");
    let nuevoTexto = prompt("Edite su nuevo texto:", botonEditar.textContent);
    
    
    if (nuevoTexto !== null) {
        botonEditar.textContent=nuevoTexto;
    }
}





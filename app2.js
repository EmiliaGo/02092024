//iniciamos un arreglo para almacener tareas

let tareas = [];

//funcion para mostrar opciones
function mostrarMenu(){
    return parseInt(prompt(`
        "Opciones disponibles"
        1.- Agregar tarea
        2.- Ver todas las tareas
        3.- Marcar tareas completadas
        4.-Salir
        `));
}

//funcion agregar tarea
function agregarTarea(){
    let nombre = prompt("Ingresa el nombre de la tarea");
    if (nombre = nombre){
            let tarea = {
                nombre: nombre,
                completada: false
            };
            tareas.push(tarea); 
            alert("Tarea agregada con exito");
    }else{
        alert("El nombre de la tarea no puede ir vacio");
    }
}

//funcion para  ver las tareas
function verTarea(){
    if(tareas.length === 0){
        alert("No hay tareas en la lista");

    }else{
        let mensaje = "Lista de tareas: \n";
        tareas.forEach((tarea, index)=>{
                
        });
        {

        }
    }
}


//funcion principal para poder manejar el programa 
function inicarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
                
            case 2:
                verTarea();
                break;

            case 3:
                tareaCompetada();
                break;

            case 4:
                alert("Saliendo del programa ...");
                continuar = False;
                break;

            default:
                alert("Opcion no valida, intentar nuevamente");

        }
    }
    alert("Programa finalizado");
}

inicarPrograma();
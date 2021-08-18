let nombre = prompt("ingresa tu nombre");
let apellido = prompt ("ingresa tu apellido");
let edad = parseInt(prompt("ingresa tu edad"));


if ((nombre !="") && (apellido !="") && (edad !=0) ){
    alert("Bienvenido/a " + nombre + " " + apellido );
    
}else{
    alert("Completar todos los datos")
}

function recomendacion(){
    let gustos = prompt("¿Que genero te gusta");
    if ((gustos=="terror")){
        alert("Te recomiendo El exorcista");
    
        if (gustos=="ciencia ficcion"){
            alert("Te recomiendo Alien");
        }
        if (gustos=="avatar"){
            alert("Te recomiendo Toy Story");
        }
        if (gustos=="aventura"){
            alert("Te recomiendo Indiana Jones");
        }
        if (gustos=="infantil"){
            alert("Te recomiendo monsters inc");
        }
        if (gustos=="suspenso"){
            alert("el silencio de los inocentes");
        }
    }
    else {
        alert("aun no analizamos ese genero, fijate en nuestra web si encontras lo que buscas")
    }
} 
 recomendacion();
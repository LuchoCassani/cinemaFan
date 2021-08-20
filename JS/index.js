function datos (){
    let nombre = prompt("ingresa tu nombre");
    let apellido = prompt ("ingresa tu apellido");
    let edad = parseInt(prompt("ingresa tu edad"));



    if ((nombre !="") && (apellido !="") && (edad !=0) ){
    alert("Bienvenido/a " + nombre + " " + apellido );
   
    }else{
        alert("Completar todos los datos");
        
    }
}


function recomendacion(){
    let gustos = prompt("¿Que genero te gusta");
        if (gustos=="terror"){
        alert("Te recomiendo Candyman");
        }
        else if (gustos=="ciencia ficcion"){
            alert("Te recomiendo Reminiscencia");
        }
        else if (gustos=="animacion"){
            alert("Te recomiendo Toy Story");
        }
        else if (gustos=="aventura"){
            alert("Te recomiendo Jungle Cruise");
        }
        else if (gustos=="infantil"){
            alert("Te recomiendo Space Jam");
        }
        else if (gustos=="accion"){
            alert("Te recomiendo el Rapidos y Furiosos 9");
        }else{
            alert("aun no analizamos ese genero, fijate en nuestra web si encontras lo que buscas")
    
        }
        
    }

datos()

recomendacion()



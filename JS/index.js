// datos del usuario almacenados en sessionStorege

function datos (){
    let nombre = prompt("ingresa tu nombre");
    let apellido = prompt ("ingresa tu apellido");
    let edad = parseInt(prompt("ingresa tu edad"));



    if ((nombre !="") && (apellido !="") && (edad !=0) ){
    alert("Bienvenido/a " + nombre + " " + apellido );
   
    }else{
        alert("Completar todos los datos");
        
    }
    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("apellido", apellido);
    sessionStorage.setItem("edad", edad)
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
        sessionStorage.setItem("gustos", gustos)   
    }

datos()

recomendacion()




//class constructora

class Peliculas {
    constructor(nombre, genero, duracion, precio) {
        this.nombre = nombre;
        this.genero = genero;
        this.duracion = duracion;
        this.precio = parseFloat(precio);
    }
    datosPeliculas(){
        return("La pelicula "+ this.nombre + " pertenece al genero " + this.genero + " y tiene una duracion de " + this.duracion + ". Su valor es de " + (this.precio= this.precio*1.21) + " pesos")
    }
    
}



const nuevasPelis = [];
nuevasPelis.push (new Peliculas("Black Widow", "accion", "2h 14min", 500));
nuevasPelis.push (new Peliculas("Blackpink", "documental", "1h 41min", 700));
nuevasPelis.push (new Peliculas("El Escuadron Suicida", "accion", "2h 13min", 350));
nuevasPelis.push (new Peliculas("El padre", "drama", "1h 37min", 325));
nuevasPelis.push (new Peliculas("Free Guy", "ciencia ficcion", "1h 55min", 450));
nuevasPelis.push (new Peliculas("Rapidos y Furiosos 9", "accion", "2h 25min", 500));
nuevasPelis.push (new Peliculas("Jungle Cruise", "aventura", "2h 42min", 750));
nuevasPelis.push (new Peliculas("La Purga", "suspenso", "1h 44min", 250));
nuevasPelis.push (new Peliculas("Space Jam", "animacion/infantil", "2h", 500));
nuevasPelis.push (new Peliculas("Candyman", "terror", "2h", 320));
nuevasPelis.push (new Peliculas("Cry Macho", "drama", "2h 30min", 780));
nuevasPelis.push (new Peliculas("viejos", "suspenso", "1h 58min", 600));
nuevasPelis.push (new Peliculas("Reminiscencia", "ciencia ficcion", "2h 28min", 525));
nuevasPelis.push (new Peliculas("Venom", "accion", "2h 20min", 340));

const enJSON = JSON.stringify(nuevasPelis);
localStorage.setItem("nuevasPelis", enJSON);

function datosPeliculas(){return("La pelicula "+ this.nombre + " pertenece al genero " + this.genero + " y tiene una duracion de " + this.duracion + ". Su valor es de " + (this.precio= this.precio*1.21) + " pesos")
}


    let lista = document.createElement("ol");
    lista.innerHTML = ("Peliculas disponibles");
    document.body.appendChild(lista);
    function listaPeliculas(){        
        let itemLista = document.createElement("li");
        itemLista.innerHTML= (nuevasPelis[0].datosPeliculas());
        lista.appendChild(itemLista);
        
        let itemLista1 = document.createElement("li");
        itemLista1.innerHTML= (nuevasPelis[1].datosPeliculas());
        lista.appendChild(itemLista1);
        
        let itemLista2 = document.createElement("li");
        itemLista2.innerHTML= (nuevasPelis[2].datosPeliculas());
        lista.appendChild(itemLista2);
        
        let itemLista3 = document.createElement("li");
        itemLista3.innerHTML= (nuevasPelis[3].datosPeliculas());
        lista.appendChild(itemLista3);
        
        let itemLista4 = document.createElement("li");
        itemLista4.innerHTML= (nuevasPelis[4].datosPeliculas());
        lista.appendChild(itemLista4);
        let itemLista5 = document.createElement("li");
        itemLista5.innerHTML= (nuevasPelis[5].datosPeliculas());
        lista.appendChild(itemLista5);
        
        let itemLista6 = document.createElement("li");
        itemLista6.innerHTML= (nuevasPelis[6].datosPeliculas());
        lista.appendChild(itemLista6);
        
        let itemLista7 = document.createElement("li");
        itemLista7.innerHTML= (nuevasPelis[7].datosPeliculas());
        lista.appendChild(itemLista7);

    
}

listaPeliculas();


let btn = document.getElementsByClassName("btn");
function agregar(){

    alert("Se agrego al carrito de compras")

    
};
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', agregar, false);
}

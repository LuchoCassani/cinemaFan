
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



// OBEJTOS

const pelicula1 = {
    nombre: "Black Widow",
    genero: "accion",
    duracion: "2h 14min"
};
const pelicula2 = {
    nombre: "Blackpink",
    genero: "documental",
    duracion: "1h 41min"
};
const pelicula3 = {
    nombre: "Cruella",
    genero: "fantasia",
    duracion: "2h 14min"
};
const pelicula4 = {
    nombre: "El Escuadron Suicida",
    genero: "accion",
    duracion: "2h 13min"
};
const pelicula5 = {
    nombre: "El Padre",
    genero: "drama",
    duracion: "1h 37min"
};
const pelicula6 = {
    nombre: "Free Guy",
    genero: "ciencia ficcion",
    duracion: "1h 55min"
};
const pelicula7 = {
    nombre: "Rapidos y Furiosos 9",
    genero: "accion",
    duracion: "2h 25min"
};
const pelicula8 = {
    nombre: "Jungle Cruise",
    genero: "aventura",
    duracion: "2h 42min"
};
const pelicula9 = {
    nombre: "La Purga",
    genero: "suspenso",
    duracion: "1h 44min"
};

//class constructora

class Peliculas {
    constructor(nombre, genero, duracion, precio) {
        this.nombre = nombre;
        this.genero = genero;
        this.duracion = duracion;
        this.precio = parseFloat(precio);
    }
    datosPeliculas(){
        console.log("La pelicula "+ this.nombre + "pertenece al genero " + this.genero + " y tiene una duracion de " + this.duracion + ". Su valor es de " + (this.precio= this.precio*1.21) + " pesos")
    }
    
}
const pelicula10 = new Peliculas ("Space Jam ",  "animacion/infantil", "2h", 350);
const pelicula11 = new Peliculas ("Candyman ",  "terror",  "2h", 555);
const pelicula12 = new Peliculas ("Cry Macho ",  "drama",  "2h 30min", 666);
const pelicula13 = new Peliculas ("Viejos ",  "suspenso",  "1h 58min", 425);
const pelicula14 = new Peliculas ("Reminiscencia ","ciencia ficcion",  "2h 28min", 777);
const pelicula15 = new Peliculas ("Venom ",  "accion",  "2h 20min", 620);

pelicula10.datosPeliculas();

const arrayPelis = ["pelicula10", "pelicula11", "pelicula12", "pelicula13", "pelicula14", "pelicula15"];
for (const pelis of arrayPelis){
    console.log(pelis)
}

const nuevasPelis = [];
nuevasPelis.push (new Peliculas("La purga", "suspenso", "2h", 500));
nuevasPelis.push (new Peliculas("La purga", "suspenso", "2h", 500));
nuevasPelis.push (new Peliculas("La purga", "suspenso", "2h", 500));
nuevasPelis.push (new Peliculas("La purga", "suspenso", "2h", 500));
nuevasPelis.push (new Peliculas("La purga", "suspenso", "2h", 500));
for (const peliculas of nuevasPelis){
    console.log(nuevasPelis)
}
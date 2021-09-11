// datos del usuario almacenados en sessionStorege
/*
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
*/



//class constructora

class Pelicula {
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
nuevasPelis.push (new Pelicula("Black Widow", "accion", "2h 14min", 500));
nuevasPelis.push (new Pelicula("Blackpink", "documental", "1h 41min", 700));
nuevasPelis.push (new Pelicula("El Escuadron Suicida", "accion", "2h 13min", 350));
nuevasPelis.push (new Pelicula("El padre", "drama", "1h 37min", 325));
nuevasPelis.push (new Pelicula("Free Guy", "ciencia ficcion", "1h 55min", 450));
nuevasPelis.push (new Pelicula("Rapidos y Furiosos 9", "accion", "2h 25min", 500));
nuevasPelis.push (new Pelicula("Jungle Cruise", "aventura", "2h 42min", 750));
nuevasPelis.push (new Pelicula("La Purga", "suspenso", "1h 44min", 250));
nuevasPelis.push (new Pelicula("Space Jam", "animacion/infantil", "2h", 500));
nuevasPelis.push (new Pelicula("Candyman", "terror", "2h", 320));
nuevasPelis.push (new Pelicula("Cry Macho", "drama", "2h 30min", 780));
nuevasPelis.push (new Pelicula("viejos", "suspenso", "1h 58min", 600));
nuevasPelis.push (new Pelicula("Reminiscencia", "ciencia ficcion", "2h 28min", 525));
nuevasPelis.push (new Pelicula("Venom", "accion", "2h 20min", 340));

const enJSON = JSON.stringify(nuevasPelis);
localStorage.setItem("nuevasPelis", enJSON);


for (i=0 ; i< nuevasPelis.length; i++) {
    nuevasPelis[i]
    
}


/*

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
*/


//agregar al carrito peliculas

let btn = document.getElementsByClassName("btn");
function agregar(){

    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1600,
      })

};
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', agregar, false);
}









//cambio de imagen cuando se pasa el mouse por arriba de la misma

//BlackWidow
let imgBlackWidow = document.getElementById("imgBlackWidow")
imgBlackWidow.onmouseover =() => imgBlackWidow.src = "https://images-na.ssl-images-amazon.com/images/I/914MHuDfMSL.jpg"
imgBlackWidow.onmouseout = () => imgBlackWidow.src = "https://lumiere-a.akamaihd.net/v1/images/blueb_007d_g_spa-ar_70x100_43a5cf52.jpeg"

//BlackPink
let imgBlackPink = document.getElementById("imgBlackPink")
imgBlackPink.onmouseover =() => imgBlackPink.src = "http://sun9-9.userapi.com/impg/Ah2EhYK2OdT2T6Ox-AxpASN0wQvCRL3oa4wzLw/qCwfobZENqI.jpg?size=864x1080&quality=96&sign=4694144fc15e98fb2f7f2490da279190&type=album"
imgBlackPink.onmouseout = () => imgBlackPink.src = "https://pics.filmaffinity.com/Blackpink_The_Movie-147705164-large.jpg"

//Cruella
let imgCruella = document.getElementById("imgCruella")
imgCruella.onmouseover =() => imgCruella.src = "https://pics.filmaffinity.com/Cruella-917590601-large.jpg"
imgCruella.onmouseout = () => imgCruella.src = "https://images.clarin.com/2021/02/16/el-poster-de-cruella-por___hNE6NYG-f_720x0__1.jpg"

//Escuadron Suicida
let imgEscuadronSuicida = document.getElementById("imgEscuadronSuicida")
imgEscuadronSuicida.onmouseover =() => imgEscuadronSuicida.src = "https://spoiler.bolavip.com/export/sites/bolavip/img/2020/08/22/the_suicide_squad_dc_fandome_pelicula_estreno_gunn.jpg_859237845.jpg"
imgEscuadronSuicida.onmouseout = () => imgEscuadronSuicida.src = "https://static.cinemarkhoyts.com.ar/Images/Posters/2cebbbfafc0f5bf3eb85c37b65e338fb.jpg?v=02092021"

//El Padre
let imgPadre = document.getElementById("imgPadre")
imgPadre.onmouseover =() => imgPadre.src = "https://i.guim.co.uk/img/media/8e4f6890df52a5a4dacb4261fa322b8d4ad16c9d/0_0_1113_1123/master/1113.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=aac6f878f48dff6836c29201801a2bb5"
imgPadre.onmouseout = () => imgPadre.src = "https://static.cinemarkhoyts.com.ar/Images/Posters/d8decde45dc42d04e916e1f0a0cf08ae.jpg?v=02092021"

//Free Guy
let imgFreeGuy = document.getElementById("imgFreeGuy")
imgFreeGuy.onmouseover =() => imgFreeGuy.src = "img/pelis/freeGuy2.png"
imgFreeGuy.onmouseout = () => imgFreeGuy.src = "https://static.cinemarkhoyts.com.ar/Images/Posters/8002446a2abc9dbace2d8b7bd2359159.jpg?v=02092021"

//Rapidos y Furiosos 9
let imgRyF9 = document.getElementById("imgRyF9")
imgRyF9.onmouseover =() => imgRyF9.src = "https://elcomercio.pe/resizer/BU2P6ZmzkUNqmtVA1AEeZpysoQM=/620x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/GNKIABIXZBEDPOJ725M6JCQTLM.jpg"
imgRyF9.onmouseout = () => imgRyF9.src = "https://static.cinemarkhoyts.com.ar/Images/Posters/10c126e16f504bb8a9715415a35c23b9.jpg?v=02092021"

//Jungle Cruise
let imgJungleCruise = document.getElementById("imgJungleCruise")
imgJungleCruise.onmouseover =() => imgJungleCruise.src = "https://es.web.img2.acsta.net/c_310_420/pictures/19/11/26/13/22/4959965.jpg"
imgJungleCruise.onmouseout = () => imgJungleCruise.src = "img/pelis/jungleCruise.png"

//La Purga
let imgPurga = document.getElementById("imgPurga")
imgPurga.onmouseover =() => imgPurga.src = "img/pelis/purga2.jpeg"
imgPurga.onmouseout = () => imgPurga.src = "img/pelis/laPurga.png"

//Space Jam
let imgSpaceJam = document.getElementById("imgSpaceJam")
imgSpaceJam.onmouseover =() => imgSpaceJam.src = "https://pics.filmaffinity.com/Space_Jam_Nuevas_leyendas-128088476-large.jpg"
imgSpaceJam.onmouseout = () => imgSpaceJam.src = "https://static.cinemarkhoyts.com.ar/Images/Posters/4a083c21e579b8e5dd9eef898242cbe3.jpg?v=02092021"

//Candyman
let imgCandyman = document.getElementById("imgCandyman")
imgCandyman.onmouseover =() => imgCandyman.src = "img/pelis/candyman1.png"
imgCandyman.onmouseout = () => imgCandyman.src = "https://static.cinemarkhoyts.com.ar/Images/Posters/3390c371a5a2049462d98634dd0c2a20.jpg?v=02092021"

//Cry Macho CAMBIAR SEGUNDA IMAGEN!!!!
let imgCryMacho = document.getElementById("imgCryMacho")
imgCryMacho.onmouseover =() => imgCryMacho.src = "img/pelis/cry-macho(1).png"
imgCryMacho.onmouseout = () => imgCryMacho.src = "https://static.cinemarkhoyts.com.ar/Images/ComingSoon/200x285/599.jpg?v=02092021"

//viejos
let imgViejos = document.getElementById("imgViejos")
imgViejos.onmouseover =() => imgViejos.src = "https://resizer.glanacion.com/resizer/kYcNeyRs6FVcwEo0ijxBdGmSdyg=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/B4I5EAIFPVGWBEMX7RKTERJK5A.jpg"
imgViejos.onmouseout = () => imgViejos.src = "https://static.cinemarkhoyts.com.ar/Images/Posters/15d0f0235becf63ef785047ea3f061b8.jpg?v=02092021"

//Reminiscencia
let imgRemini = document.getElementById("imgRemini")
imgRemini.onmouseover =() => imgRemini.src = "https://pics.filmaffinity.com/Reminiscencia-100581067-large.jpg"
imgRemini.onmouseout = () => imgRemini.src = "img/pelis/reminiscencia.jpg"

//Venom
let imgVenom = document.getElementById("imgVenom")
imgVenom.onmouseover =() => imgVenom.src = "https://es.web.img2.acsta.net/pictures/21/08/31/16/41/4145554.jpg"
imgVenom.onmouseout = () => imgVenom.src = "https://static.cinemarkhoyts.com.ar/Images/ComingSoon/200x285/587.jpg?v=02092021"


/*
const enlaces = document.querySelectorAll("#categorias a");
enlaces.forEach ( (elemento) =>{
     elemento.addEventListener("click", (evento) => {
         evento.preventDefault();
         enlaces.forEach((enlace) => enlace.classList.remove("activo"));
         evento.target.classList.add("activo")

         let categoria = evento.target.innerHTML.toLowerCase();
        

     });



})
*/
/*
 const agregarCarrito = document.querySelectorAll(".btn");
 agregarCarrito.forEach((agregarCarritoBoton) => {
     agregarCarritoBoton.addEventListener("click",elementoClickeado);
 })

 const botonComprar = document.querySelector(".botonComprar");
 botonComprar.addEventListener("click", botonComprarClickeado);

 const itemCarrito = document.querySelector("itemCarrito");

 function elementoClickeado (event) {
    const boton =event.target;
    const item = boton.closest(".item");

    const itemTitle = item.querySelector('.item_title').textContent;
    const itemPrice = item.querySelector('.item_price').textContent;
    const itemImage = item.querySelector('.item_image').src;

    agregarItemAlCarrito (itemTitle, itemPrice, itemImage)

 }

 function agregarItemAlCarrito (itemTitle, itemPrice, itemImage){

 }*/


 const sugerencias = []
     
let addButton = document.getElementById("btnSugerencia")

addButton.addEventListener("click", addToDoItem);

function addToDoItem(){
    alert("Clickeaste el boton");
    let nombre = toDoEntryBox.value;
    let apellido = toDoEntryBox2.value;
    let genero = toDoEntryBox3.value;
    let comentario = toDoEntryBox4.value;

    newToDoItem(nombre);
    newToDoItem(apellido);
    newToDoItem(genero);
    newToDoItem(comentario);

    const pasarJSON = JSON.stringify(sugerencias);
    sessionStorage.setItem("sugerencias", pasarJSON);
    
    
    for (i=0 ; i< sugerencias.length; i++) {
        sugerencias[i]
        
 
    }

    sugerencias.push(nombre, apellido, genero, comentario);
    
}




let toDoEntryBox = document.getElementById("nombre");
let toDoEntryBox2 = document.getElementById("apellido");
let toDoEntryBox3 = document.getElementById("genero");
let toDoEntryBox4 = document.getElementById("comentario");
let toDoList = document.getElementById("tablaSugerencias");






function newToDoItem (nombre, apellido, genero, comentario) {
    let toDoItem = document.createElement("td");
    let toDoItem2 = document.createElement("td");
    let toDoItem3 = document.createElement("td");
    let toDoItem4 = document.createElement("td");



    let toDoText = document.createTextNode(nombre);
    let toDoText2 = document.createTextNode(apellido);
    let toDoText3 = document.createTextNode(genero);
    let toDoText4 = document.createTextNode(comentario);


    toDoItem.appendChild(toDoText)
    toDoItem2.appendChild(toDoText2)
    toDoItem3.appendChild(toDoText3)
    toDoItem4.appendChild(toDoText4)



    toDoList.appendChild(toDoItem)
    
}   
 

 
 
  
 


 

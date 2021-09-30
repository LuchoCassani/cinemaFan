

//class constructora de pellculas

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



//array e peliculas

const nuevasPelis = [];
nuevasPelis.push (new Pelicula("Black Widow", "accion", "2h 14min", 500));
nuevasPelis.push (new Pelicula("Blackpink", "documental", "1h 41min", 700));
nuevasPelis.push (new Pelicula("Cruella", "drama", "2h 13min", 350));
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

//alerta agregado al carrito (tanto peliculas como juegos)

const producto =nuevasPelis

$(".btn").click(function(){
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1200,
      });
        
})





//cambio de imagen cuando se pasa el mouse por arriba de la misma

//BlackWidow
$(".imgBlackWidow").hover(function () {
  $(this).attr ("src", "https://images-na.ssl-images-amazon.com/images/I/914MHuDfMSL.jpg")

  }, function () {

    $(this).attr  ("src", "https://lumiere-a.akamaihd.net/v1/images/blueb_007d_g_spa-ar_70x100_43a5cf52.jpeg")
    
  }
);
//BlackPink
$(".imgBlackPink").hover(function () {
  $(this).attr ("src", "http://sun9-9.userapi.com/impg/Ah2EhYK2OdT2T6Ox-AxpASN0wQvCRL3oa4wzLw/qCwfobZENqI.jpg?size=864x1080&quality=96&sign=4694144fc15e98fb2f7f2490da279190&type=album")

  }, function () {

    $(this).attr  ("src", "https://pics.filmaffinity.com/Blackpink_The_Movie-147705164-large.jpg")
    
  }
);
//Cruella
$(".imgCruella").hover(function () {
  $(this).attr ("src", "https://pics.filmaffinity.com/Cruella-917590601-large.jpg")

  }, function () {

    $(this).attr  ("src", "https://images.clarin.com/2021/02/16/el-poster-de-cruella-por___hNE6NYG-f_720x0__1.jpg")
    
  }
);
//Escuadron Suicida
$(".imgSuicida").hover(function () {
  $(this).attr ("src", "https://spoiler.bolavip.com/export/sites/bolavip/img/2020/08/22/the_suicide_squad_dc_fandome_pelicula_estreno_gunn.jpg_859237845.jpg")

  }, function () {

    $(this).attr  ("src", "https://static.cinemarkhoyts.com.ar/Images/Posters/2cebbbfafc0f5bf3eb85c37b65e338fb.jpg?v=02092021")
    
  }
);
//El Padre
$(".imgPadre").hover(function () {
  $(this).attr ("src", "https://i.guim.co.uk/img/media/8e4f6890df52a5a4dacb4261fa322b8d4ad16c9d/0_0_1113_1123/master/1113.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=aac6f878f48dff6836c29201801a2bb5")

  }, function () {

    $(this).attr  ("src", "https://static.cinemarkhoyts.com.ar/Images/Posters/d8decde45dc42d04e916e1f0a0cf08ae.jpg?v=02092021")
    
  }
);
//Free Guy
$(".imgFreeGuy").hover(function () {
  $(this).attr ("src", "img/pelis/freeGuy2.png")

  }, function () {

    $(this).attr  ("src", "https://static.cinemarkhoyts.com.ar/Images/Posters/8002446a2abc9dbace2d8b7bd2359159.jpg?v=02092021")
    
  }
);
//Rapidos y Furiosos 9
$(".imgRyF9").hover(function () {
  $(this).attr ("src", "https://elcomercio.pe/resizer/BU2P6ZmzkUNqmtVA1AEeZpysoQM=/620x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/GNKIABIXZBEDPOJ725M6JCQTLM.jpg")

  }, function () {

    $(this).attr  ("src", "https://static.cinemarkhoyts.com.ar/Images/Posters/10c126e16f504bb8a9715415a35c23b9.jpg?v=02092021")
    
  }
);
//Jungle Cruise
$(".imgJungleCruise").hover(function () {
  $(this).attr ("src", "https://es.web.img2.acsta.net/c_310_420/pictures/19/11/26/13/22/4959965.jpg")

  }, function () {

    $(this).attr  ("src", "img/pelis/jungleCruise.png")
    
  }
);
//La Purga
$(".imgLaPurga").hover(function () {
  $(this).attr ("src", "img/pelis/purga2.jpeg")

  }, function () {

    $(this).attr  ("src", "img/pelis/laPurga.png")
    
  }
);
//Space Jam
$(".imgSapceJam").hover(function () {
  $(this).attr ("src", "https://pics.filmaffinity.com/Space_Jam_Nuevas_leyendas-128088476-large.jpg")

  }, function () {

    $(this).attr  ("src", "https://static.cinemarkhoyts.com.ar/Images/Posters/4a083c21e579b8e5dd9eef898242cbe3.jpg?v=02092021")
    
  }
);
//Candyman
$(".imgCandyMan").hover(function () {
  $(this).attr ("src", "img/pelis/candyman1.png")

  }, function () {

    $(this).attr  ("src", "https://static.cinemarkhoyts.com.ar/Images/Posters/3390c371a5a2049462d98634dd0c2a20.jpg?v=02092021")
    
  }
);
//Cry Macho 
$(".imgCryMacho").hover(function () {
  $(this).attr ("src", "img/pelis/cry-macho(1).png")

  }, function () {

    $(this).attr  ("src", "https://static.cinemarkhoyts.com.ar/Images/ComingSoon/200x285/599.jpg?v=02092021")
    
  }
);
//viejos
$(".imgViejos").hover(function () {
  $(this).attr ("src", "https://static.cinemarkhoyts.com.ar/Images/Posters/15d0f0235becf63ef785047ea3f061b8.jpg?v=02092021")

  }, function () {

    $(this).attr  ("src", "https://pbs.twimg.com/media/E7AFmOyXMAQ6k8u.jpg:large")
    
  }
);
//Reminiscencia
$(".imgReminiscencia").hover(function () {
  $(this).attr ("src", "https://pics.filmaffinity.com/Reminiscencia-100581067-large.jpg")

  }, function () {

    $(this).attr  ("src", "img/pelis/reminiscencia.jpg")
    
  }
);
//Venom
$(".imgVenom").hover(function () {
  $(this).attr ("src", "https://es.web.img2.acsta.net/pictures/21/08/31/16/41/4145554.jpg")

  }, function () {

    $(this).attr  ("src", "https://static.cinemarkhoyts.com.ar/Images/ComingSoon/200x285/587.jpg?v=02092021")
    
  }
);

// Carrito Compras
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="container shoppingCartItem">
        
        <div class="row shopping-cart-item">
                <div class="col-4 d-flex"><img src=${itemImage} class="shopping-cart-image imgCarrito "></div>
                <div class="col-2 d-flex justify-content-center">
                    <h6 class="shopping-cart-item-title shoppingCartItemTitle titulos nombreJuegoPeli">${itemTitle}</h6>
                </div>
            <div class="col-2 shopping-cart-price titulos d-flex justify-content-center"> 
                <p class="item-price shoppingCartItemPrice nombreJuegoPeli"> ${itemPrice}</p>
                </div>
            <div class="col-4 d-flex justify-content-center flex-column">
            <div  d-flex> 
                <div class="shopping-cart-quantity d-flex">
                    <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                        value="1">
                    <button class="btn btn-danger buttonDelete d-flex  " type="button">X</button>
                </div>
              </div>  
            </div>
        </div>
        

</div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}


/*
//Buscador
let buscador = $("#table").DataTable();
$("#inputSearch").keyup(function () { 
  

    buscador.search($(this).val()).draw();

    if ($("#inputSearch").val() == ""){
      $(".contentSearch").fadeOut();
      else{
        $(".contentSearch").fadeIn();
      }
    }
});
*/
// Info extra obtenida del Json
/*
$("#bwInfo").append('<button id="btn2">Mas info</button>');
$("#btn2").click(function(){
  $.get("../JSON/peliculas.json", function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      $("#bwInfo").prepend(`<div id="div1">
                              <h3>${dato.nombre1}</h3>
                              <p> ${dato.genero1}</p>
                              <p> ${dato.duracion1}</p>
                              <p> <iframe width="300" height="315" src="https://www.youtube.com/embed/gR3JFH_3LhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
                              </div>`)
                              

                              
    }  
    
  }
  
  }); 


})


*/



const URLGET = "../json/peliculas.json"





//////////Card, trailer y cambio de imagen de Blackwidow//////////////


$.get(URLGET, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 1){
      $("#blackWidow").prepend(`<div>
                                    <h3 id="blackWidow" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgBlackWidow" src="${dato.imagen1}" alt="imagen black widow">
                                  <div id="bwInfo" class="item-details">
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <p> ${dato.duracion}</p>
                                    <p> ${dato.genero}</p>
                                    <button id="btn1_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn1_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Blackwidow</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/gR3JFH_3LhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgBlackWidow").hover(function () {
                                  $(this).attr ("src", "https://images-na.ssl-images-amazon.com/images/I/914MHuDfMSL.jpg")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://lumiere-a.akamaihd.net/v1/images/blueb_007d_g_spa-ar_70x100_43a5cf52.jpeg")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    



//////////Card, trailer y cambio de imagen de Blackpink//////////////


$.get(URLGET, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 2){
      $("#blackPink").prepend(`<div>
                                    <h3 id="blackPink" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgBlackPink" src="${dato.imagen1}" alt="imagen blackPink">
                                  <div id="bpInfo" class="item-details">
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <p> ${dato.duracion}</p>
                                    <p> ${dato.genero}</p>
                                    <button id="btn2_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn2_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Blackpink</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/7jx_vdvxWu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgBlackPink").hover(function () {
                                  $(this).attr ("src", "http://sun9-9.userapi.com/impg/Ah2EhYK2OdT2T6Ox-AxpASN0wQvCRL3oa4wzLw/qCwfobZENqI.jpg?size=864x1080&quality=96&sign=4694144fc15e98fb2f7f2490da279190&type=album")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://pics.filmaffinity.com/Blackpink_The_Movie-147705164-large.jpg")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    



//////////Card, trailer y cambio de imagen de Cruella//////////////

$.get(URLGET, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 3){
      $("#cruella").prepend(`<div>
                                    <h3 id="blackPink" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgCruella" src="${dato.imagen1}" alt="imagen cruella">
                                  <div id="cruellaInfo" class="item-details">
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <p> ${dato.duracion}</p>
                                    <p> ${dato.genero}</p>
                                    <button id="btn3_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn3_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Blackpink</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/_nvO-yhc61w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgCruella").hover(function () {
                                  $(this).attr ("src", "https://pics.filmaffinity.com/Cruella-917590601-large.jpg")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://images.clarin.com/2021/02/16/el-poster-de-cruella-por___hNE6NYG-f_720x0__1.jpg")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    


//////////Card, trailer y cambio de imagen de escuadron suicida//////////////

$.get(URLGET, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 4){
      $("#escSuicida").prepend(`<div>
                                    <h3 id="escSuicida" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgSuicida" src="${dato.imagen1}" alt="imagen cruella">
                                  <div id="cruellaInfo" class="item-details">
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <p> ${dato.duracion}</p>
                                    <p> ${dato.genero}</p>
                                    <button id="btn4_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn4_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Blackpink</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/eg5ciqQzmK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgSuicida").hover(function () {
                                  $(this).attr ("src", "https://spoiler.bolavip.com/export/sites/bolavip/img/2020/08/22/the_suicide_squad_dc_fandome_pelicula_estreno_gunn.jpg_859237845.jpg")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://static.cinemarkhoyts.com.ar/Images/Posters/2cebbbfafc0f5bf3eb85c37b65e338fb.jpg?v=02092021")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    

//Boton mas info y trailer Padre

$("#padreInfo").append('<button id="btn5" class="btn titulos">Mas info!</button>');
$("#padreInfo").prepend(`<div id="div5" style="display: none">
                              
                              <p> Genero: ${nuevasPelis[4].genero}</p>
                              <p> Duracion: ${nuevasPelis[4].duracion}</p>
                              <button id="btn5_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn5").click(() => { 
  $("#div5").toggle("slow");
});

$("#btn5_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Padre</u></strong>',
      html:
        '<iframe width="350" height="315" src="https://www.youtube.com/embed/GvcW2ArYpwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Muy buena!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});
//Boton mas info y trailer Freeguy

$("#fgInfo").append('<button id="btn6" class="btn titulos">Mas info!</button>');
$("#fgInfo").prepend(`<div id="div6" style="display: none">
                              
                              <p> Genero: ${nuevasPelis[5].genero}</p>
                              <p> Duracion: ${nuevasPelis[5].duracion}</p>
                              <button id="btn6_trailer" type="button">Trailer</button> 
                              </div>`);
                              
$("#btn6").click(() => { 
  $("#div6").toggle("slow");
});

$("#btn6_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Free Guy</u></strong>',
      html:
        '<iframe width="350" height="315" src="https://www.youtube.com/embed/pdCP9doJARE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Muy buena!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});
//Boton mas info y trailer RyF9

$("#rYfInfo").append('<button id="btn7" class="btn titulos">Mas info!</button>');
$("#rYfInfo").prepend(`<div id="div7" style="display: none">
                              
                              <p> Genero: ${nuevasPelis[6].genero}</p>
                              <p> Duracion: ${nuevasPelis[6].duracion}</p> 
                              <button id="btn7_trailer" type="button">Trailer</button> 
                              </div>`);
                              
$("#btn7").click(() => { 
  $("#div7").toggle("slow");
});

$("#btn7_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Rapido y Furioso 9</u></strong>',
      html:
        '<iframe width="350" height="315" src="https://www.youtube.com/embed/3YNwcdVkpZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Muy buena!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer Jungle Cruise


$("#jcInfo").append('<button id="btn8" class="btn titulos">Mas info!</button>');
$("#jcInfo").prepend(`<div id="div8" style="display: none">
                              
                              <p> Genero: ${nuevasPelis[7].genero}</p>
                              <p> Duracion: ${nuevasPelis[7].duracion}</p>
                              <button id="btn8_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn8").click(() => { 
  $("#div8").toggle("slow");
});

$("#btn8_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Jungle Cruise</u></strong>',
      html:
        '<iframe width="350" height="315" src="https://www.youtube.com/embed/f_HvoipFcA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Muy buena!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer Purga

$("#purgaInfo").append('<button id="btn9" class="btn titulos">Mas Info!</button>');
$("#purgaInfo").prepend(`<div id="div9" style="display: none">
                              
                              <p> Genero: ${nuevasPelis[8].genero}</p>
                              <p> Duracion: ${nuevasPelis[8].duracion}</p>
                              <button id="btn9_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn9").click(() => { 
  $("#div9").toggle("slow");
});

$("#btn9_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>La Purga</u></strong>',
      html:
        '<iframe width="350" height="315" src="https://www.youtube.com/embed/xOrXpK-rUaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Muy buena!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer Space Jam


$("#sjInfo").append('<button id="btn10" class="btn titulos">Mas Info!</button>');
$("#sjInfo").prepend(`<div id="div10" style="display: none">
                              
                              <p> Genero: ${nuevasPelis[9].genero}</p>
                              <p> Duracion: ${nuevasPelis[9].duracion}</p>
                              <button id="btn10_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn10").click(() => { 
  $("#div10").toggle("slow");
});

$("#btn10_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Space Jam</u></strong>',
      html:
        '<iframe width="350" height="315" src="https://www.youtube.com/embed/olXYZOsXw_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Muy buena!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});



//Boton mas info y trailer Candyman


$("#candyInfo").append('<button id="btn11" class="btn titulos">Mas Info!</button>');
$("#candyInfo").prepend(`<div id="div11" style="display: none">
                              
                              <p> Genero: ${nuevasPelis[10].genero}</p>
                              <p> Duracion: ${nuevasPelis[10].duracion}</p>
                              <button id="btn11_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn11").click(() => { 
  $("#div11").toggle("slow");
});

$("#btn11_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Candyman</u></strong>',
      html:
        '<iframe width="350" height="315" src="https://www.youtube.com/embed/TPBH3XO8YEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Muy buena!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});



//Boton mas info y trailer Cry Macho

$("#cmInfo").append('<button id="btn12" class="btn titulos">Mas Info!</button>');
$("#cmInfo").prepend(`<div id="div12" style="display: none">
                              
                              <p> Genero: ${nuevasPelis[11].genero}</p>
                              <p> Duracion: ${nuevasPelis[11].duracion}</p>
                              <button id="btn12_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn12").click(() => { 
  $("#div12").toggle("slow");
});

$("#btn12_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Cry Macho</u></strong>',
      html:
        '<iframe width="350" height="315" src="https://www.youtube.com/embed/JVc8SI5CAKw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Muy buena!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer Viejos

$("#viejosInfo").append('<button id="btn13" class="btn titulos">Mas Info!</button>');
$("#viejosInfo").prepend(`<div id="div13" style="display: none">
                              
                              <p> Genero: ${nuevasPelis[12].genero}</p>
                              <p> Duracion: ${nuevasPelis[12].duracion}</p>
                              <button id="btn13_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn13").click(() => { 
  $("#div13").toggle("slow");
});

$("#btn13_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Viejos</u></strong>',
      html:
        '<iframe width="350" height="315" src="https://www.youtube.com/embed/Yv3UERl1DA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Muy buena!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});


//Boton mas info y trailer Reminiscencia

$("#remiInfo").append('<button id="btn14" class="btn titulos">Mas Info!</button>');
$("#remiInfo").prepend(`<div id="div14" style="display: none">
                              
                              <p> Genero: ${nuevasPelis[13].genero}</p>
                              <p> Duracion: ${nuevasPelis[13].duracion}</p>
                              <button id="btn14_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn14").click(() => { 
  $("#div14").toggle("slow");
});

$("#btn14_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Reminiscencia</u></strong>',
      html:
        '<iframe width="350" height="315" src="https://www.youtube.com/embed/_BggT--yxf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Muy buena!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
  })
});


//Boton mas info y trailer Venom

$("#venomInfo").append('<button id="btn15" class="btn titulos">Mas Info!</button>');
$("#venomInfo").prepend(`<div id="div15" style="display: none">
                              
                              <p> Genero: ${nuevasPelis[14].genero}</p>
                              <p> Duracion: ${nuevasPelis[14].duracion}</p>
                              <button id="btn15_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn15").click(() => { 
  $("#div15").toggle("slow");
});

$("#btn15_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Venom</u></strong>',
      html:
        '<iframe width="350" height="315" src="https://www.youtube.com/embed/-FmWuCgJmxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Muy buena!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
  
  })
});



//class constructora de juegos

class Juego {
  constructor(nombre, genero, precio) {
      this.nombre = nombre;
      this.genero = genero;
      this.precio = parseFloat(precio);
  }
  
  
}



//array de juegos

const nuevosJuegos = [];
nuevosJuegos.push (new Juego("Far Cry 5", "accion", 1500));
nuevosJuegos.push (new Juego("Assassin´s Creed Odyssey", "aventura", 1700));
nuevosJuegos.push (new Juego("Fallout 4", "Supervivencia", 1350));
nuevosJuegos.push (new Juego("Cyberpunk 2077", "accion/aventura", 1350));
nuevosJuegos.push (new Juego("Diablo II", "Terror", 1325));
nuevosJuegos.push (new Juego("Residen Evil Village", "Terror/Supervivencia", 1450));
nuevosJuegos.push (new Juego("Fifa 22", "Futbol", 1500));
nuevosJuegos.push (new Juego("Mortal Kombat 11", "Lucha", 1750));
nuevosJuegos.push (new Juego("SW JEDI Fallen Order", "aventura", 1250));
nuevosJuegos.push (new Juego("Forza Horizonz 5", "Carreras", 1500));
nuevosJuegos.push (new Juego("COD Vanguard", "Guerra", 1320));
nuevosJuegos.push (new Juego("Red Dead Redepmtion 2", "Aventura/Western", 1780));
nuevosJuegos.push (new Juego("Skyrim", "Aventura", 1600));
nuevosJuegos.push (new Juego("GTA V", "Accion", 1525));


const enJSONjuegos = JSON.stringify(nuevosJuegos);
localStorage.setItem("nuevosJuegos", enJSONjuegos);


for (i=0 ; i< nuevosJuegos.length; i++) {
  nuevosJuegos[i]
  
}

//Boton mas info y trailer Farcry 5

$("#farCryInfo").append('<button id="btn16" class="btn titulos">Mas info!</button>');
$("#farCryInfo").prepend(`<div id="div16" style="display: none">
                              <p class ="titulos"> Genero: ${nuevosJuegos[0].genero}</p>
                              <button id="btn16_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn16").click(() => { 
  $("#div16").toggle("slow");
});

$("#btn16_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Far Cry 5</u></strong>',
      html:
        '<iframe width="400" height="315" src="https://www.youtube.com/embed/4hVME3O9wf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Lo quiero!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer assassins

$("#acInfo").append('<button id="btn17" class="btn titulos">Mas info!</button>');
$("#acInfo").prepend(`<div id="div17" style="display: none">
                              <p class ="titulos"> Genero: ${nuevosJuegos[1].genero}</p>
                              <button id="btn17_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn17").click(() => { 
  $("#div17").toggle("slow");
});

$("#btn17_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Far Cry 5</u></strong>',
      html:
        '<iframe width="400" height="315" src="https://www.youtube.com/embed/Asy_p4xStbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Lo quiero!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer fallout

$("#FalloutInfo").append('<button id="btn18" class="btn titulos">Mas info!</button>');
$("#FalloutInfo").prepend(`<div id="div18" style="display: none">
                              <p class ="titulos"> Genero: ${nuevosJuegos[0].genero}</p>
                              <button id="btn18_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn18").click(() => { 
  $("#div18").toggle("slow");
});

$("#btn18_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Far Cry 5</u></strong>',
      html:
        '<iframe width="400" height="315" src="https://www.youtube.com/embed/WbVfMVBTR7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Lo quiero!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer cyberpunk

$("#cyberInfo").append('<button id="btn19" class="btn titulos">Mas info!</button>');
$("#cyberInfo").prepend(`<div id="div19" style="display: none">
                              <p class ="titulos"> Genero: ${nuevosJuegos[0].genero}</p>
                              <button id="btn19_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn19").click(() => { 
  $("#div19").toggle("slow");
});

$("#btn19_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Far Cry 5</u></strong>',
      html:
        '<iframe width="400" height="315" src="https://www.youtube.com/embed/VhM3NRu23Sk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Lo quiero!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer diablo 2

$("#diabloInfo").append('<button id="btn20" class="btn titulos">Mas info!</button>');
$("#diabloInfo").prepend(`<div id="div20" style="display: none">
                              <p class ="titulos"> Genero: ${nuevosJuegos[0].genero}</p>
                              <button id="btn20_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn20").click(() => { 
  $("#div20").toggle("slow");
});

$("#btn20_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Far Cry 5</u></strong>',
      html:
        '<iframe width="400" height="315" src="<iframe width="560" height="315" src="https://www.youtube.com/embed/zenPx6HIjAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Lo quiero!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer resident evil

$("#residentInfo").append('<button id="btn21" class="btn titulos">Mas info!</button>');
$("#residentInfo").prepend(`<div id="div21" style="display: none">
                              <p class ="titulos"> Genero: ${nuevosJuegos[0].genero}</p>
                              <button id="btn21_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn21").click(() => { 
  $("#div21").toggle("slow");
});

$("#btn21_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Far Cry 5</u></strong>',
      html:
        '<iframe width="400" height="315" src="https://www.youtube.com/embed/YGQ_YtpTwdc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Lo quiero!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer fifa22

$("#fifatInfo").append('<button id="btn22" class="btn titulos">Mas info!</button>');
$("#fifatInfo").prepend(`<div id="div22" style="display: none">
                              <p class ="titulos"> Genero: ${nuevosJuegos[0].genero}</p>
                              <button id="btn22_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn22").click(() => { 
  $("#div22").toggle("slow");
});

$("#btn22_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Far Cry 5</u></strong>',
      html:
        '<iframe width="400" height="315" src="https://www.youtube.com/embed/o1igaMv46SY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Lo quiero!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer MK

$("#mortalInfo").append('<button id="btn23" class="btn titulos">Mas info!</button>');
$("#mortalInfo").prepend(`<div id="div23" style="display: none">
                              <p class ="titulos"> Genero: ${nuevosJuegos[0].genero}</p>
                              <button id="btn23_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn23").click(() => { 
  $("#div23").toggle("slow");
});

$("#btn23_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Far Cry 5</u></strong>',
      html:
        '<iframe width="400" height="315" src="https://www.youtube.com/embed/OEQsQqkEKMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Lo quiero!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer starwars

$("#starWarsInfo").append('<button id="btn24" class="btn titulos">Mas info!</button>');
$("#starWarsInfo").prepend(`<div id="div24" style="display: none">
                              <p class ="titulos"> Genero: ${nuevosJuegos[0].genero}</p>
                              <button id="btn24_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn24").click(() => { 
  $("#div24").toggle("slow");
});

$("#btn24_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Far Cry 5</u></strong>',
      html:
        '<iframe width="400" height="315" src="https://www.youtube.com/embed/0GLbwkfhYZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Lo quiero!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer forza

$("#forzalInfo").append('<button id="btn25" class="btn titulos">Mas info!</button>');
$("#forzalInfo").prepend(`<div id="div25" style="display: none">
                              <p class ="titulos"> Genero: ${nuevosJuegos[0].genero}</p>
                              <button id="btn25_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn25").click(() => { 
  $("#div25").toggle("slow");
});

$("#btn25_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Far Cry 5</u></strong>',
      html:
        '<iframe width="400" height="315" src="https://www.youtube.com/embed/FYH9n37B7Yw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Lo quiero!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer nba

$("#nbalInfo").append('<button id="btn26" class="btn titulos">Mas info!</button>');
$("#nbalInfo").prepend(`<div id="div26" style="display: none">
                              <p class ="titulos"> Genero: ${nuevosJuegos[0].genero}</p>
                              <button id="btn26_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn26").click(() => { 
  $("#div26").toggle("slow");
});

$("#btn26_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Far Cry 5</u></strong>',
      html:
        '<iframe width="400" height="315" src="https://www.youtube.com/embed/OcUzwnA569M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Lo quiero!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer COD

$("#codlInfo").append('<button id="btn27" class="btn titulos">Mas info!</button>');
$("#codlInfo").prepend(`<div id="div27" style="display: none">
                              <p class ="titulos"> Genero: ${nuevosJuegos[0].genero}</p>
                              <button id="btn27_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn27").click(() => { 
  $("#div27").toggle("slow");
});

$("#btn27_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Far Cry 5</u></strong>',
      html:
        '<iframe width="400" height="315" src="https://www.youtube.com/embed/OQ1CwPhE8KQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Lo quiero!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer red dead redemption 2

$("#redInfo").append('<button id="btn28" class="btn titulos">Mas info!</button>');
$("#redInfo").prepend(`<div id="div28" style="display: none">
                              <p class ="titulos"> Genero: ${nuevosJuegos[0].genero}</p>
                              <button id="btn27_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn28").click(() => { 
  $("#div28").toggle("slow");
});

$("#btn27_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Far Cry 5</u></strong>',
      html:
        '<iframe width="400" height="315" src="https://www.youtube.com/embed/eaW0tYpxyp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Lo quiero!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer skyrim 2

$("#elderInfo").append('<button id="btn29" class="btn titulos">Mas info!</button>');
$("#elderInfo").prepend(`<div id="div29" style="display: none">
                              <p class ="titulos"> Genero: ${nuevosJuegos[0].genero}</p>
                              <button id="btn29_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn29").click(() => { 
  $("#div29").toggle("slow");
});

$("#btn29_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Far Cry 5</u></strong>',
      html:
        '<iframe width="400" height="315" src="https://www.youtube.com/embed/JSRtYpNRoN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Lo quiero!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer gta

$("#gtaInfo").append('<button id="btn30" class="btn titulos">Mas info!</button>');
$("#gtaInfo").prepend(`<div id="div30" style="display: none">
                              <p class ="titulos"> Genero: ${nuevosJuegos[0].genero}</p>
                              <button id="btn30_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn30").click(() => { 
  $("#div30").toggle("slow");
});

$("#btn30_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Far Cry 5</u></strong>',
      html:
        '<iframe width="400" height="315" src="https://www.youtube.com/embed/QkkoHAzjnUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Lo quiero!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

// CAmbio de imagenes al pasar el mouse - Juegos

//farCry

$(".imgFarCry").hover(function () {
  $(this).attr ("src", "https://image.api.playstation.com/cdn/UP0001/CUSA05904_00/mDdyfOGS1Oxix7XwXZ37ymF6Rp8Px0ZR.png?w=440&thumb=false")

  }, function () {

    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.11227.69582963086497758.e1cff2e3-ddf1-42bf-930d-f380ad63f100.38d7bb7c-3e33-471b-b22d-0f0a635832ad")
    
  }
);

//assassin´s

$(".imgAs").hover(function () {
  $(this).attr ("src", "https://avatarfiles.alphacoders.com/154/thumb-1920-154163.jpg")

  }, function () {

    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.51903.71972716530068101.ccdcadf1-1d2a-49f2-9c37-0b0a27e5a53c.08e06d2d-1104-4c80-b879-91facf8348d5")
    
  }
);

//fallout

$(".imgFallout").hover(function () {
  $(this).attr ("src", "https://image.api.playstation.com/vulcan/ap/rnd/202009/2419/BWMVfyxONkIAlAJVQd96qPuN.png?w=440&thumb=false")

  }, function () {

    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.43525.65812291288120258.78db0a4c-6279-4de9-b89c-0e62cd3d55c7.8c1aabc2-4501-44a1-a9db-5f0de4dcad0a")
    
  }
);

//Cyberpunk 2077

$(".imgCyberpunk").hover(function () {
  $(this).attr ("src", "https://www.techpowerup.com/review/cyberpunk-2077-benchmark-test-performance/images/small.png")

  }, function () {

    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.20969.63407868131364914.0f6bcae3-6458-450b-bfc3-7cb0553c6674.93e7c9e8-a2e6-4d89-a002-c1aa2cc7cb2a")
    
  }
);

//Diablo II

$(".imgDiablo").hover(function () {
  $(this).attr ("src", "https://cdn.discord.me/server/261917f1e5349f4eaf5d0916ca0c695cd077cae9c8ad5eee814cc60c5a556ca5/icon_72bb0aa8617df1c92e465fd6cf91e24b32ba6a8cf10f3a47f1be55adbd361647.jpg")

  }, function () {

    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.27541.14357505034575924.27607c86-9992-48ed-bec3-f49a9af6a5d8.c3d9452f-19db-4fd6-9cfa-b95db18957d4")
    
  }
);

//Residen Evil Village

$(".imgRev").hover(function () {
  $(this).attr ("src", "https://image.api.playstation.com/vulcan/ap/rnd/202101/1905/7JQRCCU33WnaDxEbDQxm3bTc.png?w=440&thumb=false")

  }, function () {

    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.56356.13809253632566266.a1f3ac36-ddef-4b21-8956-5d5668ac9650.8475240d-f04c-469d-87aa-e13eb3d97da7")
    
  }
);

//Fifa 22

$(".imgFifa").hover(function () {
  $(this).attr ("src", "https://image.api.playstation.com/vulcan/ap/rnd/202106/2914/W7cptuW6JeY8R4Dhqa9vmSSc.png?w=440&thumb=false")

  }, function () {

    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.18006.13631243568577353.6b4f037a-e981-46d8-a51a-816831166e01.721fc92e-759a-4edb-b333-0e1ec9a95eb9")
    
  }
);

//MK 11

$(".imgMortal").hover(function () {
  $(this).attr ("src", "https://image.api.playstation.com/vulcan/ap/rnd/202011/0319/rdNblnyGXx8EEyqA2u5GJBmB.png?w=440&thumb=false")

  }, function () {

    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.36292.13674739434371576.46d1be43-7d5d-4b71-90b0-97829522e27b.0b2c29b8-fe0f-4a1c-89d7-ce29529162c1")
    
  }
);

//star wars

$(".imgStarWars").hover(function () {
  $(this).attr ("src", "https://image.api.playstation.com/vulcan/ap/rnd/202105/2621/IYejmyize0uwfFEhzbSIO5r0.png?w=440&thumb=false")

  }, function () {

    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.19587.65392999590663672.028b6875-f925-4d40-b3a1-e44db3b4fa32.13ac70be-1487-492d-934e-c1c514e85f52")
    
  }
);

//forza

$(".imgForza").hover(function () {
  $(this).attr ("src", "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/06/forza-horizon-5-cartel-2379291.jpg?itok=Xd5swSL5")

  }, function () {

    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.46839.14212569852911719.83e50f34-8706-4131-993f-2974c44a294e.3d6bcf8a-59a1-4f85-b2c1-1935078d9d1a")
    
  }
);

//NBA

$(".imgNba").hover(function () {
  $(this).attr ("src", "https://pbs.twimg.com/media/E7I-5lJWYAEgkEf.jpg")

  }, function () {

    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.46839.14212569852911719.83e50f34-8706-4131-993f-2974c44a294e.3d6bcf8a-59a1-4f85-b2c1-1935078d9d1a")
    
  }
);

//COD

$(".imgCod").hover(function () {
  $(this).attr ("src", "https://image.api.playstation.com/vulcan/img/rnd/202109/2218/JelPN9rNJfDtoQJTwDsa0deG.png?w=440&thumb=false")

  }, function () {

    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.31712.14284165171924425.328fdc67-fafc-4929-b10f-b1bc44a36c07.9cb9d66c-985e-4c82-b678-6a638d68b0c8")
    
  }
);

//RDR 2

$(".imgRed").hover(function () {
  $(this).attr ("src", "https://image.api.playstation.com/vulcan/img/rnd/202011/1718/ooOoSjORBdw4VD3KXrHBlhHZ.png?w=440&thumb=false")

  }, function () {

    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.34695.68182501197884443.ac728a87-7bc1-4a0d-8bc6-0712072da93c.25816f86-f27c-4ade-ae29-222661145f1f")
    
  }
);

//The Elder Scrolls V

$(".imgElder").hover(function () {
  $(this).attr ("src", "https://image.api.playstation.com/vulcan/img/rnd/202010/2613/GwaZyAhG6cK3F6oefbJrZnou.png?w=440&thumb=false")

  }, function () {

    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.64810.68326442227858632.03782b23-7f26-4a8e-ba87-177bdf2c3c90.fdefe49f-270c-44e5-b660-6d7764b37f0f")
    
  }
);

//GTA V

$(".imgGta").hover(function () {
  $(this).attr ("src", "https://image.api.playstation.com/cdn/UP1004/CUSA00419_00/GqNiHbm2NDGAChh3UGkNvngLe3U5LmbW.png?w=440&thumb=false")

  }, function () {

    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.14994.67002547918942251.a07b8704-ba60-45a4-a51a-06c979a5426e.3a248e28-facb-4073-8b6d-749f912fa299")
    
  }
);

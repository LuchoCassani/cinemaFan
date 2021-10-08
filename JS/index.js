

//class constructora de pellculas // se hizo para practicar ya que se termina utilizando un json///

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



//array e peliculas// se hizo para practicar ya que se termina utilizando un json///

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
      <div class="container shoppingCartItem container-fluid">
          <div class="row shopping-cart-item d-flex">
                  <div class="col d-flex">
                    <img src=${itemImage} class="shopping-cart-image imgCarrito ">
                  </div>
                  
                  <div class="col shopping-cart-price titulos d-flex justify-content-center"> 
                      <p class="item-price shoppingCartItemPrice nombreJuegoPeli"> ${itemPrice}</p>
                  </div>
                  <div class="col d-flex justify-content-center flex-column">
                        <div  d-flex> 
                            <div class="shopping-cart-quantity d-flex align-items-center">
                                  <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                                  value="1">
                                <button class="comprarButton btn-danger buttonDelete d-flex  " type="button">X</button>
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

$(".comprarButton").click(function (e) { 
  e.preventDefault();
  Swal.fire({
    title: 'Excelente!',
    text: 'Gracias por tu compra, que lo disfrutes!',
    imageUrl: 'https://cl.buscafs.com/www.levelup.com/public/uploads/images/678400/678400.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
});


//////////Card, trailer y cambio de imagen de Blackwidow//////////////
const URLGET = "../json_/peliculas.json"

$.get(URLGET, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 1){
      $("#blackWidow").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="blackWidow" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgBlackWidow pelis_juegos" src="${dato.imagen1}" alt="imagen black widow">
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
      $("#blackPink").prepend(`<div class="divPeliculaJuego">
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
      $("#cruella").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="cruella" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgCruella pelis_juegos" src="${dato.imagen1}" alt="imagen cruella">
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
                                      title: '<strong><u>Cruella</u></strong>',
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
      $("#escSuicida").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="escSuicida" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgSuicida" src="${dato.imagen1}" alt="imagen escuadron suicida 2">
                                  <div id="escInfo" class="item-details">
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <p> ${dato.duracion}</p>
                                    <p> ${dato.genero}</p>
                                    <button id="btn4_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn4_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Escuadron Suicida</u></strong>',
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

//////////Card, trailer y cambio de imagen de El padre//////////////

$.get(URLGET, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 5){
      $("#padre").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="padre" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgPadre" src="${dato.imagen1}" alt="imagen de el padre">
                                  <div id="padreInfo" class="item-details">
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <p> ${dato.duracion}</p>
                                    <p> ${dato.genero}</p>
                                    <button id="btn5_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn5_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>EL padre</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/GvcW2ArYpwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgPadre").hover(function () {
                                  $(this).attr ("src", "https://i.guim.co.uk/img/media/8e4f6890df52a5a4dacb4261fa322b8d4ad16c9d/0_0_1113_1123/master/1113.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=aac6f878f48dff6836c29201801a2bb5")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://static.cinemarkhoyts.com.ar/Images/Posters/d8decde45dc42d04e916e1f0a0cf08ae.jpg?v=02092021")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    
//////////Card, trailer y cambio de imagen de Freeguy//////////////

$.get(URLGET, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 6){
      $("#freeGuy").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="freeGuy" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgFreeGuy" src="${dato.imagen1}" alt="imagen free guy">
                                  <div id="fgInfo" class="item-details">
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <p> ${dato.duracion}</p>
                                    <p> ${dato.genero}</p>
                                    <button id="btn6_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn6_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Free guy</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/X2m-08cOAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgFreeGuy").hover(function () {
                                  $(this).attr ("src", "../img/pelis/freeGuy2.png")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://static.cinemarkhoyts.com.ar/Images/Posters/8002446a2abc9dbace2d8b7bd2359159.jpg?v=02092021")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    
//////////Card, trailer y cambio de imagen de rapido y furioso 9//////////////

$.get(URLGET, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 7){
      $("#rp9").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="rp9" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgRyF9" src="${dato.imagen1}" alt="imagen rapido y furioso 9">
                                  <div id="rYfInfo" class="item-details">
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <p> ${dato.duracion}</p>
                                    <p> ${dato.genero}</p>
                                    <button id="btn7_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn7_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>RyF 9</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/3YNwcdVkpZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgRyF9").hover(function () {
                                  $(this).attr ("src", "https://static.cinemarkhoyts.com.ar/Images/Posters/10c126e16f504bb8a9715415a35c23b9.jpg?v=02092021")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://elcomercio.pe/resizer/BU2P6ZmzkUNqmtVA1AEeZpysoQM=/620x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/GNKIABIXZBEDPOJ725M6JCQTLM.jpg")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    

//////////Card, trailer y cambio de imagen de Jungle Cruise//////////////


$.get(URLGET, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 8){
      $("#jungleCruise").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="jungleCruise" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgJungleCruise" src="${dato.imagen1}" alt="imagen jungle cruise">
                                  <div id="jcInfo" class="item-details">
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <p> ${dato.duracion}</p>
                                    <p> ${dato.genero}</p>
                                    <button id="btn8_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
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
                                })
                                $(".imgJungleCruise").hover(function () {
                                  $(this).attr ("src", "../img/pelis/jungleCruise.png")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://es.web.img2.acsta.net/c_310_420/pictures/19/11/26/13/22/4959965.jpg")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    


//////////Card, trailer y cambio de imagen de La purga//////////////

$.get(URLGET, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 9){
      $("#purga").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="purga" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgLaPurga" src="${dato.imagen1}" alt="imagen de la Purga">
                                  <div id="purgaInfo" class="item-details">
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <p> ${dato.duracion}</p>
                                    <p> ${dato.genero}</p>
                                    <button id="btn9_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn9_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>La Purga</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/4vg27yJGyZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgLaPurga").hover(function () {
                                  $(this).attr ("src", "../img/pelis/purga2.jpeg")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "../img/pelis/laPurga.png")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    

//////////Card, trailer y cambio de imagen de Space Jam//////////////


$.get(URLGET, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 10){
      $("#spaceJam").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="spaceJam" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgSapceJam" src="${dato.imagen1}" alt="imagen Space Jam">
                                  <div id="sjInfo" class="item-details">
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <p> ${dato.duracion}</p>
                                    <p> ${dato.genero}</p>
                                    <button id="btn10_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn10_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Space Jam</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/z7PSyWuArVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgSapceJam").hover(function () {
                                  $(this).attr ("src", "https://pics.filmaffinity.com/Space_Jam_Nuevas_leyendas-128088476-large.jpg")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://static.cinemarkhoyts.com.ar/Images/Posters/4a083c21e579b8e5dd9eef898242cbe3.jpg?v=02092021")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    




//////////Card, trailer y cambio de imagen de Candyman//////////////


$.get(URLGET, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 11){
      $("#candyMan").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="candyMan" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgCandyMan" src="${dato.imagen1}" alt="imagen CAndyman">
                                  <div id="candyInfo" class="item-details">
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <p> ${dato.duracion}</p>
                                    <p> ${dato.genero}</p>
                                    <button id="btn11_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn11_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Candiman</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/tlwzuZ9kOQU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgCandyMan").hover(function () {
                                  $(this).attr ("src", "../img/pelis/candyman1.png")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://static.cinemarkhoyts.com.ar/Images/Posters/3390c371a5a2049462d98634dd0c2a20.jpg?v=02092021")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    




//////////Card, trailer y cambio de imagen de Cry MAcho//////////////

$.get(URLGET, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 12){
      $("#cryMacho").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="cryMacho" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgCryMacho" src="${dato.imagen1}" alt="imagen Cry Macho">
                                  <div id="cmInfo" class="item-details">
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <p> ${dato.duracion}</p>
                                    <p> ${dato.genero}</p>
                                    <button id="btn12_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn12_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Cry Macho</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/dp5J1FZnGVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgCryMacho").hover(function () {
                                  $(this).attr ("src", "../img/pelis/cry-macho(1).png")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://static.cinemarkhoyts.com.ar/Images/ComingSoon/200x285/599.jpg?v=02092021")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    

//////////Card, trailer y cambio de imagen de viejos//////////////

$.get(URLGET, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 13){
      $("#viejos").prepend(`<div class="divPeliculaJuego"> 
                                    <h3 id="viejos" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgViejos" src="${dato.imagen1}" alt="imagen Viejos">
                                  <div id="viejosInfo" class="item-details">
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <p> ${dato.duracion}</p>
                                    <p> ${dato.genero}</p>
                                    <button id="btn13_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
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
                                })
                                $(".imgViejos").hover(function () {
                                  $(this).attr ("src", "https://static.cinemarkhoyts.com.ar/Images/Posters/15d0f0235becf63ef785047ea3f061b8.jpg?v=02092021")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://pbs.twimg.com/media/E7AFmOyXMAQ6k8u.jpg:large")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    

//////////Card, trailer y cambio de imagen de Reminiscencia//////////////

$.get(URLGET, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 14){
      $("#reminis").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="reminis" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgReminiscencia" src="${dato.imagen1}" alt="imagen Reminiscencia">
                                  <div id="remiInfo" class="item-details">
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <p> ${dato.duracion}</p>
                                    <p> ${dato.genero}</p>
                                    <button id="btn14_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn14_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Reminiscencia</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/grL3Z6xDa7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgReminiscencia").hover(function () {
                                  $(this).attr ("src", "https://pics.filmaffinity.com/Reminiscencia-100581067-large.jpg")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "../img/pelis/reminiscencia.jpg")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    

//////////Card, trailer y cambio de imagen de Venom//////////////


$.get(URLGET, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 15){
      $("#venom").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="venom" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgVenom" src="${dato.imagen1}" alt="imagen Venom">
                                  <div id="venomInfo" class="item-details">
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <p> ${dato.duracion}</p>
                                    <p> ${dato.genero}</p>
                                    <button id="btn15_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn15_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Venom</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/F4Ygcigj0Gk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgVenom").hover(function () {
                                  $(this).attr ("src", "https://es.web.img2.acsta.net/pictures/21/08/31/16/41/4145554.jpg")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://static.cinemarkhoyts.com.ar/Images/ComingSoon/200x285/587.jpg?v=02092021")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    



//class constructora de juegos // se hizo para practicar ya que se termina utilizando un json///

class Juego {
  constructor(nombre, genero, precio) {
      this.nombre = nombre;
      this.genero = genero;
      this.precio = parseFloat(precio);
  }
  
  
}



//array de juegos // se hizo para practicar ya que se termina utilizando un json///

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
nuevosJuegos.push (new Juego("NBA2K22", "Basquetball", 1525));


const enJSONjuegos = JSON.stringify(nuevosJuegos);
localStorage.setItem("nuevosJuegos", enJSONjuegos);


for (i=0 ; i< nuevosJuegos.length; i++) {
  nuevosJuegos[i]
  
}

const URLGETJUEGOS = "../json_/juegos.json"


//////////Card, trailer y cambio de imagen de Far Cry 5//////////////
$.get(URLGETJUEGOS, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 1){
      $("#farCry").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="farCry" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgFarCry" src="${dato.imagen1}" alt="imagen Far Cry 5">
                                  <div id="farCryInfo" class="item-details">
                                    <p> ${dato.genero}</p>
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <button id="btn16_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn16_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Far Cry 5</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/3fWZctJMUmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgFarCry").hover(function () {
                                  $(this).attr ("src", "https://image.api.playstation.com/cdn/UP0001/CUSA05904_00/mDdyfOGS1Oxix7XwXZ37ymF6Rp8Px0ZR.png?w=440&thumb=false")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.11227.69582963086497758.e1cff2e3-ddf1-42bf-930d-f380ad63f100.38d7bb7c-3e33-471b-b22d-0f0a635832ad")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    
//////////Card, trailer y cambio de imagen de Assassins Creed//////////////

$.get(URLGETJUEGOS, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 2){
      $("#aCreed").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="aCreed" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgAs" src="${dato.imagen1}" alt="imagen Assassins Creed">
                                  <div id="acInfo" class="item-details">
                                    <p> ${dato.genero}</p>
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <button id="btn17_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn17_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Assassin´s Creed Odyssey</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/Asy_p4xStbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgAs").hover(function () {
                                  $(this).attr ("src", "https://avatarfiles.alphacoders.com/154/thumb-1920-154163.jpg")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.51903.71972716530068101.ccdcadf1-1d2a-49f2-9c37-0b0a27e5a53c.08e06d2d-1104-4c80-b879-91facf8348d5")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    

//////////Card, trailer y cambio de imagen de fallout//////////////

$.get(URLGETJUEGOS, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 3){
      $("#fallout").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="fallout" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgFallout" src="${dato.imagen1}" alt="imagen Fallout 4">
                                  <div id="FalloutInfo" class="item-details">
                                    <p> ${dato.genero}</p>
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <button id="btn18_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn18_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Fallout 4</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/X5aJfebzkrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgFallout").hover(function () {
                                  $(this).attr ("src", "https://store-images.s-microsoft.com/image/apps.43525.65812291288120258.78db0a4c-6279-4de9-b89c-0e62cd3d55c7.8c1aabc2-4501-44a1-a9db-5f0de4dcad0a")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://image.api.playstation.com/vulcan/ap/rnd/202009/2419/BWMVfyxONkIAlAJVQd96qPuN.png?w=440&thumb=false")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    

//////////Card, trailer y cambio de imagen de cyberpunk//////////////

$.get(URLGETJUEGOS, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 4){
      $("#cyberpunk").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="cyberpunk" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgCyberpunk" src="${dato.imagen1}" alt="imagen Cyberpunk 2077">
                                  <div id="cyberInfo" class="item-details">
                                    <p> ${dato.genero}</p>
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <button id="btn19_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn19_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Cyberpunk 2077"</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/VhM3NRu23Sk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgCyberpunk").hover(function () {
                                  $(this).attr ("src", "https://www.techpowerup.com/review/cyberpunk-2077-benchmark-test-performance/images/small.png")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.20969.63407868131364914.0f6bcae3-6458-450b-bfc3-7cb0553c6674.93e7c9e8-a2e6-4d89-a002-c1aa2cc7cb2a")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    

//////////Card, trailer y cambio de imagen de diablo II//////////////

$.get(URLGETJUEGOS, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 5){
      $("#diablo").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="diablo" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgDiablo" src="${dato.imagen1}" alt="imagen Diablo II">
                                  <div id="diabloInfo" class="item-details">
                                    <p> ${dato.genero}</p>
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <button id="btn20_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn20_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Diablo II</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/AekJJj2c_Jk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgDiablo").hover(function () {
                                  $(this).attr ("src", "https://cdn.discord.me/server/261917f1e5349f4eaf5d0916ca0c695cd077cae9c8ad5eee814cc60c5a556ca5/icon_72bb0aa8617df1c92e465fd6cf91e24b32ba6a8cf10f3a47f1be55adbd361647.jpg")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.27541.14357505034575924.27607c86-9992-48ed-bec3-f49a9af6a5d8.c3d9452f-19db-4fd6-9cfa-b95db18957d4")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    
//////////Card, trailer y cambio de imagen de resident evil village//////////////

$.get(URLGETJUEGOS, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 6){
      $("#resEvil").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="resEvil" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgRev" src="${dato.imagen1}" alt="imagen REsiden Evil Village">
                                  <div id="residentInfo" class="item-details">
                                    <p> ${dato.genero}</p>
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <button id="btn21_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn21_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>RE Village</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/ztj8fv6Ttp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgRev").hover(function () {
                                  $(this).attr ("src", "https://image.api.playstation.com/vulcan/ap/rnd/202101/1905/7JQRCCU33WnaDxEbDQxm3bTc.png?w=440&thumb=false")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.56356.13809253632566266.a1f3ac36-ddef-4b21-8956-5d5668ac9650.8475240d-f04c-469d-87aa-e13eb3d97da7")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    
//////////Card, trailer y cambio de imagen de fifa 22//////////////

$.get(URLGETJUEGOS, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 7){
      $("#fifa").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="fifa" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgFifa" src="${dato.imagen1}" alt="imagen Fifa22">
                                  <div id="fifatInfo" class="item-details">
                                    <p> ${dato.genero}</p>
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <button id="btn22_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn22_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Fifa 22</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/vLj-27T-SEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgFifa").hover(function () {
                                  $(this).attr ("src", "https://image.api.playstation.com/vulcan/ap/rnd/202106/2914/W7cptuW6JeY8R4Dhqa9vmSSc.png?w=440&thumb=false")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.18006.13631243568577353.6b4f037a-e981-46d8-a51a-816831166e01.721fc92e-759a-4edb-b333-0e1ec9a95eb9")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    

//////////Card, trailer y cambio de imagen de MK//////////////

$.get(URLGETJUEGOS, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 8){
      $("#mk").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="mk" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgMortal" src="${dato.imagen1}" alt="imagen Mortal Kombat 11 ultimated">
                                  <div id="mortalInfo" class="item-details">
                                    <p> ${dato.genero}</p>
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <button id="btn23_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn23_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>MK 11 ultimate</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/UoTams2yc0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgMortal").hover(function () {
                                  $(this).attr ("src", "https://image.api.playstation.com/vulcan/ap/rnd/202011/0319/rdNblnyGXx8EEyqA2u5GJBmB.png?w=440&thumb=false")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.36292.13674739434371576.46d1be43-7d5d-4b71-90b0-97829522e27b.0b2c29b8-fe0f-4a1c-89d7-ce29529162c1")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    
//////////Card, trailer y cambio de imagen de star wars//////////////

$.get(URLGETJUEGOS, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 9){
      $("#starWars").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="starWars" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgStarWars" src="${dato.imagen1}" alt="imagen Jedi Fallen Order">
                                  <div id="starWarsInfo" class="item-details">
                                    <p> ${dato.genero}</p>
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <button id="btn24_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn24_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>SW Jedi Fallen Order</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/0GLbwkfhYZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgStarWars").hover(function () {
                                  $(this).attr ("src", "https://image.api.playstation.com/vulcan/ap/rnd/202105/2621/IYejmyize0uwfFEhzbSIO5r0.png?w=440&thumb=false")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.19587.65392999590663672.028b6875-f925-4d40-b3a1-e44db3b4fa32.13ac70be-1487-492d-934e-c1c514e85f52")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    

//////////Card, trailer y cambio de imagen de forza//////////////

$.get(URLGETJUEGOS, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 10){
      $("#forza").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="forza" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgForza" src="${dato.imagen1}" alt="imagen Forza Horizon 5">
                                  <div id="forzalInfo" class="item-details">
                                    <p> ${dato.genero}</p>
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <button id="btn25_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn25_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Forza Horizon 5</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/FYH9n37B7Yw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgForza").hover(function () {
                                  $(this).attr ("src", "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/06/forza-horizon-5-cartel-2379291.jpg?itok=Xd5swSL5")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.7859.14506879174941978.138d3eab-0b06-443b-a252-c99592521394.33a348aa-892d-49b8-9ef2-6ff06c22cf96")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    
//////////Card, trailer y cambio de imagen de nba2k22//////////////

$.get(URLGETJUEGOS, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 15){
      $("#nba").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="nba" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgNba" src="${dato.imagen1}" alt="imagen NBA2K22">
                                  <div id="nbalInfo" class="item-details">
                                    <p> ${dato.genero}</p>
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <button id="btn26_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn26_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>NBA2K22</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/OcUzwnA569M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgNba").hover(function () {
                                  $(this).attr ("src", "https://pbs.twimg.com/media/E7I-5lJWYAEgkEf.jpg")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.46839.14212569852911719.83e50f34-8706-4131-993f-2974c44a294e.3d6bcf8a-59a1-4f85-b2c1-1935078d9d1a")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    

//////////Card, trailer y cambio de imagen de COD//////////////

$.get(URLGETJUEGOS, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 11){
      $("#COD").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="COD" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgCod" src="${dato.imagen1}" alt="imagen COD Vanguard">
                                  <div id="codlInfo" class="item-details">
                                    <p> ${dato.genero}</p>
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <button id="btn27_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn27_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>COD Vanguard</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/OQ1CwPhE8KQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgCod").hover(function () {
                                  $(this).attr ("src", "https://image.api.playstation.com/vulcan/img/rnd/202109/2218/JelPN9rNJfDtoQJTwDsa0deG.png?w=440&thumb=false")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.31712.14284165171924425.328fdc67-fafc-4929-b10f-b1bc44a36c07.9cb9d66c-985e-4c82-b678-6a638d68b0c8")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    

//////////Card, trailer y cambio de imagen de RDR 2//////////////

$.get(URLGETJUEGOS, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 12){
      $("#RDR2").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="RDR2" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgRed" src="${dato.imagen1}" alt="imagen Red Dead Redemption 2">
                                  <div id="redInfo" class="item-details">
                                    <p> ${dato.genero}</p>
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <button id="btn28_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn28_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Red Dead Redemption II</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/eaW0tYpxyp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgRed").hover(function () {
                                  $(this).attr ("src", "https://image.api.playstation.com/vulcan/img/rnd/202011/1718/ooOoSjORBdw4VD3KXrHBlhHZ.png?w=440&thumb=false")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.34695.68182501197884443.ac728a87-7bc1-4a0d-8bc6-0712072da93c.25816f86-f27c-4ade-ae29-222661145f1f")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    


//////////Card, trailer y cambio de imagen de skyrim 2//////////////

$.get(URLGETJUEGOS, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 13){
      $("#elder").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="elder" class="item-title titulos">${dato.title}</h3>
                                    <img class="item-image imgElder" src="${dato.imagen1}" alt="imagen Skyrim 2">
                                  <div id="elderInfo" class="item-details">
                                    <p> ${dato.genero}</p>
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <button id="btn29_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn29_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>Skyrim</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/JSRtYpNRoN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgElder").hover(function () {
                                  $(this).attr ("src", "https://image.api.playstation.com/vulcan/img/rnd/202010/2613/GwaZyAhG6cK3F6oefbJrZnou.png?w=440&thumb=false")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://store-images.s-microsoft.com/image/apps.64810.68326442227858632.03782b23-7f26-4a8e-ba87-177bdf2c3c90.fdefe49f-270c-44e5-b660-6d7764b37f0f")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    

//////////Card, trailer y cambio de imagen de GTA V//////////////

$.get(URLGETJUEGOS, function (respuesta, estado) {
  if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
      if (dato.id == 14){
      $("#gta").prepend(`<div class="divPeliculaJuego">
                                    <h3 id="gta" class="item-title titulos nombres">${dato.title}</h3>
                                    <img class="item-image imgGta" src="${dato.imagen1}" alt="imagen GTA V">
                                  <div id="gtaInfo" class="item-details">
                                    <p> ${dato.genero}</p>
                                    <h4 class="item-price">$ ${dato.precio}</h4>
                                    <button id="btn30_trailer" class="btn" type="button">Trailer</button>      
                                  </div>  
                                </div>`);
                                $("#btn30_trailer").click(function (e) { 
                                  e.preventDefault();
                                    Swal.fire({
                                      title: '<strong><u>GTA V</u></strong>',
                                      html:
                                        '<iframe width="350" height="315" src="https://www.youtube.com/embed/QkkoHAzjnUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      showCloseButton: true,
                                      focusConfirm: false,
                                      confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Muy buena!',
                                      confirmButtonAriaLabel: 'Thumbs up, great!',
                                      
                                    })
                                })
                                $(".imgGta").hover(function () {
                                  $(this).attr ("src", "https://store-images.s-microsoft.com/image/apps.43187.66515090704019777.7fa547c1-c211-4229-a4d3-3ceef762e0a4.757bf1c2-f967-4386-9ff1-16da7dd19307")
                                
                                  }, function () {
                                
                                    $(this).attr  ("src", "https://image.api.playstation.com/cdn/UP1004/CUSA00419_00/GqNiHbm2NDGAChh3UGkNvngLe3U5LmbW.png?w=440&thumb=false")
                                    
                                  }
                                );;
                            
    }}  
    
  }
})    











//////////Contacto/////
$("#sugerencias").append(`
                            <form class="container formulario">
                              <input type="text" class="form-control nombretxt guardarDato" placeholder="Tu nombre" required>
                              <input type="text" class="form-control apellidotxt guardarDato" placeholder="Tu apellido">
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="radioDefault" id="formRadioDefault">
                                <label class="form-check-label titulos" for="formRadioDefault">Video juegos</label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="radioDefault" id="formRadioChecked" checked="">
                                <label class="form-check-label titulos" for="formRadioChecked">Peliculas</label>
                              </div>
                              <select class="form-select" aria-label="genero preferido">
                                <option selected="">Genero preferido</option>
                                <option value="1">Accion</option>
                                <option value="2">Aventura</option>
                                <option value="3">Supervivencia</option>
                                <option value="4">Suspenso</option>
                                <option value="5">Terror</option>
                                <option value="6">Aventura</option>
                                <option value="6">Otro</option>
                              </select>
                              <input type="text" class="form-control sugerenciatxt guardarDato" placeholder="¿Que te gustaria que incluyeramos?">
                              <label for="formControlInput" class="form-label titulos">Email address</label>
                              <input type="email" class="form-control email guardarDato" id="formControlInput" placeholder="name@example.com">
                              <input type="submit" value="Enviar" class="btn titulos  btnFormulario">
                            </form>                          
                          `)






//////form sugerencias///////

class nuevasSugerencias {
  constructor(sugerenciaNombre, sugerenciaApellido, sugerenciaGenero, sugerenciaEmail) {
      this.sugerenciaNombre = sugerenciaNombre;
      this.sugerenciaApellido = sugerenciaApellido
      this.sugerenciaGenero = sugerenciaGenero;
      this.sugerenciaEmail = sugerenciaEmail;
  }
  
  
}
const sugerencias = []



$(".btnFormulario").click(function (e) { 
  e.preventDefault();
  
    Swal.fire('Muchas gracias por tu sugerencia!');
  

    
  const sugerenciaNombre = $(".nombretxt").val();
  const sugerenciaApellido = $(".apellidotxt").val();
  const sugerenciaGenero = $(".sugerenciatxt").val();
  const sugerenciaEmail = $(".email").val();
  localStorage.setItem("sugerenciaNombre", sugerenciaNombre);
  localStorage.setItem("sugerenciaApellido", sugerenciaApellido);
  localStorage.setItem("sugerenciaGenero", sugerenciaGenero);
  localStorage.setItem("sugerenciaEmail", sugerenciaEmail);
  
  const jsonSugerencias = JSON.stringify(sugerencias);
  localStorage.setItem("sugerencias", jsonSugerencias);
  for (i=0 ; i< sugerencias.length; i++) {
    sugerencias[i]

  }
  sugerencias.push = new nuevasSugerencias (sugerenciaNombre,sugerenciaApellido,sugerenciaGenero,sugerenciaEmail)

});


///////boton para ir al menu//////
$("#botonArriba").append(
  `<button id="btnScrollArriba" class="btn_ScrollArriba">
  <i class="fas fa-arrow-circle-up"></i>
  </button>

  `)


  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('.btn_ScrollArriba').fadeIn('slow');
    } else {
        $('.btn_ScrollArriba').fadeOut('slow');
    }
});
$('.btn_ScrollArriba').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
});



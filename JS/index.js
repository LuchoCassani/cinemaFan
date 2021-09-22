

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
  <div class="row shoppingCartItem container-fluid">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3 container-fluid">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-5 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
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
      shoppingCartItemPriceElement.textContent.replace('€', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
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





//Boton mas info y trailer Blackwidow


$("#bwInfo").append('<button id="btn1" class="btn">Mas info!</button>');
$("#bwInfo").prepend(`<div id="div1" style="display: none">
                              <h4 class="item-price">Precio: $ ${nuevasPelis[0].precio}</h4>
                              <p> Genero: ${nuevasPelis[0].genero}</p>
                              <p> Duracion: ${nuevasPelis[0].duracion}</p>
                              <button id="btn1_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn1").click(() => { 
  $("#div1").toggle("slow");
});

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
});

//Boton mas info y trailer Blackpink

$("#bpInfo").append('<button id="btn2" class="btn">Mas info!</button>');
$("#bpInfo").prepend(`<div id="div2" style="display: none">
                              <h4 class="item-price">Precio: $ ${nuevasPelis[1].precio}</h4>
                              <p> Genero: ${nuevasPelis[1].genero}</p>
                              <p> Duracion: ${nuevasPelis[1].duracion}</p>
                              <button id="btn2_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn2").click(() => { 
  $("#div2").toggle("slow");
});

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
});

//Boton mas info y trailer Cruella

$("#cruellaInfo").append('<button id="btn3" class="btn">Mas info!</button>');
$("#cruellaInfo").prepend(`<div id="div3" style="display: none">
                              <h4 class="item-price">Precio: $ ${nuevasPelis[2].precio}</h4>
                              <p> Genero: ${nuevasPelis[2].genero}</p>
                              <p> Duracion: ${nuevasPelis[2].duracion}</p>  
                              <button id="btn3_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn3").click(() => { 
  $("#div3").toggle("slow");
});

$("#btn3_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Cruella</u></strong>',
      html:
        '<iframe width="280" height="315" src="https://www.youtube.com/embed/gmRKv7n2If8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Muy buena!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer Esc Suicida

$("#esInfo").append('<button id="btn4" class="btn">Mas info!</button>');
$("#esInfo").prepend(`<div id="div4" style="display: none">
                              <h4 class="item-price">Precio: $ ${nuevasPelis[3].precio}</h4>
                              <p> Genero: ${nuevasPelis[3].genero}</p>
                              <p> Duracion: ${nuevasPelis[3].duracion}</p>
                              <button id="btn4_trailer" type="button">Trailer</button>
                              </div>`);
                              
$("#btn4").click(() => { 
  $("#div4").toggle("slow");
});

$("#btn4_trailer").click(function (e) { 
  e.preventDefault();
    Swal.fire({
      title: '<strong><u>Escuadron Suicida</u></strong>',
      html:
        '<iframe width="350" height="315" src="https://www.youtube.com/embed/IblLmbGxw1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Muy buena!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
});

//Boton mas info y trailer Padre

$("#padreInfo").append('<button id="btn5" class="btn">Mas info!</button>');
$("#padreInfo").prepend(`<div id="div5" style="display: none">
                              <h4 class="item-price">Precio: $ ${nuevasPelis[4].precio}</h4>
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

$("#fgInfo").append('<button id="btn6" class="btn">Mas info!</button>');
$("#fgInfo").prepend(`<div id="div6" style="display: none">
                              <h4 class="item-price">Precio: $ ${nuevasPelis[5].precio}</h4>
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

$("#rYfInfo").append('<button id="btn7" class="btn">Mas info!</button>');
$("#rYfInfo").prepend(`<div id="div7" style="display: none">
                              <h4 class="item-price">Precio: $ ${nuevasPelis[6].precio}</h4>
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


$("#jcInfo").append('<button id="btn8" class="btn">Mas info!</button>');
$("#jcInfo").prepend(`<div id="div8" style="display: none">
                              <h4 class="item-price">Precio: $ ${nuevasPelis[7].precio}</h4>
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

$("#purgaInfo").append('<button id="btn9" class="btn">Mas Info!</button>');
$("#purgaInfo").prepend(`<div id="div9" style="display: none">
                              <h4 class="item-price">Precio: $ ${nuevasPelis[8].precio}</h4>
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


$("#sjInfo").append('<button id="btn10" class="btn">Mas Info!</button>');
$("#sjInfo").prepend(`<div id="div10" style="display: none">
                              <h4 class="item-price">Precio: $ ${nuevasPelis[9].precio}</h4>
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


$("#candyInfo").append('<button id="btn11" class="btn">Mas Info!</button>');
$("#candyInfo").prepend(`<div id="div11" style="display: none">
                              <h4 class="item-price">Precio: $ ${nuevasPelis[10].precio}</h4>
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

$("#cmInfo").append('<button id="btn12" class="btn">Mas Info!</button>');
$("#cmInfo").prepend(`<div id="div12" style="display: none">
                              <h4 class="item-price">Precio: $ ${nuevasPelis[11].precio}</h4>
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

$("#viejosInfo").append('<button id="btn13" class="btn">Mas Info!</button>');
$("#viejosInfo").prepend(`<div id="div13" style="display: none">
                              <h4 class="item-price">Precio: $ ${nuevasPelis[12].precio}</h4>
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

$("#remiInfo").append('<button id="btn14" class="btn">Mas Info!</button>');
$("#remiInfo").prepend(`<div id="div14" style="display: none">
                              <h4 class="item-price">Precio: $ ${nuevasPelis[13].precio}</h4>
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

$("#venomInfo").append('<button id="btn15" class="btn">Mas Info!</button>');
$("#venomInfo").prepend(`<div id="div15" style="display: none">
                              <h4 class="item-price">Precio: $ ${nuevasPelis[14].precio}</h4>
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


//Escuchamos el evento click del botón agregado
$("#btn111").click(() => { 
  $.getJSON("../JSON/juegos.json", function (respuesta, estado) {
      if(estado === "success"){
        let misDatos = respuesta;
        for (const dato of misDatos) {
          $("#listaStock").prepend(`<div id="div111">
                                        
                                          <li id="listaJuegos">
                                              <h3>${dato.nombre}</h3>
                                              <p> ${dato.genero}</p> 
                                          </li>
                                      </div>`)
          }  
        }
      }
    );
  }
);

$("#btn222").click(function (e) { 
  e.preventDefault();
  $("#listaStock").fadeOut("slow");
  
});
$("#btn333").click(function (e) { 
  e.preventDefault();
  $("#listaStock").toggle("slow");
  
});
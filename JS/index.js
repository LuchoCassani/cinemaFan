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


const producto =nuevasPelis

$(".btn").click(function(){
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1600,
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
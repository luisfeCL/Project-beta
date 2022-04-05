const hamburguerButton = document.querySelector('.hamburguer-bt');
const menu = document.querySelector('.menu');
const subMenuButtonProducts = document.querySelector('.products');
const subMenuButtonAbout = document.querySelector('.about');
const subMenuProducts = document.querySelector('.submenuproducts');
const subMenuAbout = document.querySelector('.submenuabout');
const backpackButton = document.querySelector('.header__backpack');
const backpack = document.querySelector('.backpack')
const backpackDesktop = document.querySelector('.backpackDesktop')
const link = document.querySelector('.all')

function hamburgueMenu(){hamburguerButton.addEventListener('click', function() {
    if(backpack.classList.contains('off')){
        hamburguerButton.classList.toggle('on');
        menu.classList.toggle('off')
    }else{
        backpack.classList.toggle('off');
        hamburguerButton.classList.toggle('on');
        menu.classList.toggle('off')
    }
})
}
hamburgueMenu();

function linkAll(){
    link.addEventListener('click', function(){
        location.href='./tienda.html'
    })
}
linkAll();

function openMenuDesktop(){
    backpackDesktop.addEventListener('click', function(){
        backpack.classList.toggle('off')
    })
}
openMenuDesktop()

function home() {
    document.querySelector('.header__logo').addEventListener('click', function(){
        location.href='index.html'
    })
}
home()

backpackButton.addEventListener('click', function(){
    if (menu.classList.contains('off')){
        backpack.classList.toggle('off')
    }else{
        hamburguerButton.classList.toggle('on');
        menu.classList.toggle('off');
        backpack.classList.toggle('off')
    }
})

subMenuButtonProducts.addEventListener('click', function() {
    subMenuProducts.classList.toggle('off')
})

subMenuButtonAbout.addEventListener('click', function() {
    subMenuAbout.classList.toggle('off')
})



fetch("./js/data.json")
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        const productos = response.products;
        productos.forEach(function(elemento){
            document.querySelector('.all__products').innerHTML +=
            `<a  class="product__item grid__cell--20" >
                <img class="product__image" src="${elemento.image}" class="item__image"></img>
                <h2 class="product__name">${elemento.name}</h2>
                <p class="product__price">${elemento.price}€</p>
                <button class="product__button">Add to cart</button>
            </a>`
        });

        })
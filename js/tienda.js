
const hamburguerButton = document.querySelector('.hamburguer-bt');
const menu = document.querySelector('.menu');
const subMenuButtonProducts = document.querySelector('.products');
const subMenuButtonAbout = document.querySelector('.about');
const subMenuProducts = document.querySelector('.submenuproducts');
const subMenuAbout = document.querySelector('.submenuabout');
const backpackButton = document.querySelector('.header__backpack');
const backpack = document.querySelector('.backpack')
const backpackDesktop = document.querySelector('.backpackDesktop')

export function hamburgueMenu(){hamburguerButton.addEventListener('click', function() {
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

export function openBackpack(){
    backpackButton.addEventListener('click', function(){
    if (menu.classList.contains('off')){
        backpack.classList.toggle('off')
    }else{
        hamburguerButton.classList.toggle('on');
        menu.classList.toggle('off');
        backpack.classList.toggle('off')
    }
})}
openBackpack()

subMenuButtonProducts.addEventListener('click', function() {
    subMenuProducts.classList.toggle('off')
})

subMenuButtonAbout.addEventListener('click', function() {
    subMenuAbout.classList.toggle('off')
})

const printProduct = function(elemento){
    return `<a href='./single_product.html?product=${elemento.name}' class="product__item grid__cell--20" >
                <img class="product__image" src="${elemento.image}" class="item__image"></img>
                <h2 class="product__name">${elemento.name}</h2>
                <p class="product__price">${elemento.price}€</p>
                <button class="product__button">Add to cart</button>
            </a>`
}
// href='./single_product.html?product=${elemento.name}'


fetch("./js/data.json")
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        const productos = response.products;
        productos.forEach(function(elemento){
            document.querySelector('.tienda__content').innerHTML += printProduct(elemento)
        });
        document.querySelectorAll('.tienda__item').forEach(function(elemento, index) {
            elemento.addEventListener('click', function() {
                console.log(`PEDIR FRUTA con id ${response.products[index].name}`)
            })
        })
        
    })

    // href='./single_product.html?product=${elemento.name}'
    // console.log(elemento, response.products[index].id);
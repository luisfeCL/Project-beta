
const hamburguerButton = document.querySelector('.hamburguer-bt');
const menu = document.querySelector('.menu');
const subMenuButtonProducts = document.querySelector('.products');
const subMenuButtonAbout = document.querySelector('.about');
const subMenuProducts = document.querySelector('.submenuproducts');
const subMenuAbout = document.querySelector('.submenuabout');

function hamburgueMenu(){
    hamburguerButton.addEventListener('click', function() {
    hamburguerButton.classList.toggle('on');
    menu.classList.toggle('off')
})
}
hamburgueMenu();

subMenuButtonProducts.addEventListener('click', function() {
    subMenuProducts.classList.toggle('off')
})
subMenuButtonAbout.addEventListener('click', function() {
    subMenuAbout.classList.toggle('off')
})


const printProduct = function(elemento){
    return `<a href='./single_product.html?product=${elemento.name}' class="tienda__item grid__cell--20" >
        <img src="${elemento.image}" class="item__image"></img>
        <h2 class="item__name">${elemento.name}</h2>
        <button class="item__button">buy</button>
    </a>`
}


fetch("./js/data.json")
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        const productos = response.products;
        productos.forEach(function(elemento){
            document.querySelector('.tienda__content').innerHTML += printProduct(elemento)
        })
    })


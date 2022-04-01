import { swiper } from './swiper.js';



const hamburguerButton = document.querySelector('.hamburguer-bt');
const menu = document.querySelector('.menu');
const subMenuButtonProducts = document.querySelector('.products');
const subMenuButtonAbout = document.querySelector('.about');
const subMenuProducts = document.querySelector('.submenuproducts');
const subMenuAbout = document.querySelector('.submenuabout')

function hamburgueMenu(){hamburguerButton.addEventListener('click', function() {
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

fetch("./js/data.json")
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        const productos = response.products;
        productos.forEach(function(elemento){
            document.querySelector('.swiper-wrapper').innerHTML +=
            `<div class="swiper-slide">
                <img src="${elemento.image}" />
            </div>`
        })
        
    })
import { swiper } from './swiper.js';
import { renderDetail } from './single-product.js';


const hamburguerButton = document.querySelector('.hamburguer-bt');
const menu = document.querySelector('.menu');
const subMenuButtonProducts = document.querySelector('.products');
const subMenuButtonAbout = document.querySelector('.about');
const subMenuProducts = document.querySelector('.submenuproducts');
const subMenuAbout = document.querySelector('.submenuabout');
const backpackButton = document.querySelector('.header__backpack');
const backpack = document.querySelector('.backpack')

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
            document.querySelector('.swiper-wrapper').innerHTML +=
            `<div class="swiper-slide">
                <img src="${elemento.image}" />
            </div>`
        });
        document.querySelectorAll('.swiper-slide').forEach(function(elemento, index) {
            elemento.addEventListener('click', function() {
                renderDetail(response.name);
            })
        })
    })
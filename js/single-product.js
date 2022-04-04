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

const params = new URLSearchParams(window.location.search);
const productId = params.get('product');


export const detailTemple = function renderDetailTemplate (elemento){
    return `
    <h1 class="single__title">Product name </h1>
    <article class="single__content">
        <div class="single__image"></div>
        <h3 class="single__subtitle">description</h3>
        <p class="single__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <h3 class="single__subtitle">Details</h3>
        <ul class="single__details">
            <li class="single__detail">• detail(1)</li>
            <li class="single__detail">• detail(2)</li>
            <li class="single__detail">• detail(3)</li>
        </ul>
        <button class="single__button">buy</button>
    </article>`
}
export const renderDetail = function(productName) {
    console.log(`producto ${productName}`);
}
renderDetail()
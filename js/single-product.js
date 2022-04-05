const hamburguerButton = document.querySelector('.hamburguer-bt');
const menu = document.querySelector('.menu');
const subMenuButtonProducts = document.querySelector('.products');
const subMenuButtonAbout = document.querySelector('.about');
const subMenuProducts = document.querySelector('.submenuproducts');
const subMenuAbout = document.querySelector('.submenuabout');
const backpackButton = document.querySelector('.header__backpack');
const backpack = document.querySelector('.backpack');
const backpackDesktop = document.querySelector('.backpackDesktop')

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

export const detailTemplate = function(elemento){
    return `
    <h1 class="single__title">${elemento}</h1>
    <article class="single__content">
        <img src="./elements/images/vampire.png" class="single__image"></img>
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



export const render = function() {
    const params = new URLSearchParams(window.location.search)
    const product= params.get('product');
    fetch("./js/data.json")
        .then(function(response){
            return response.json()
        })
        .then(function(response) {
            debugger

            response.products.forEach(function(response){
                if (response.name == product){
                    document.querySelector('.single').innerHTML = detailTemplate(product);
                    document.querySelector('.single__image').src = response.image;

                }
            })
        })
}

render()

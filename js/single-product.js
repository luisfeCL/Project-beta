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

const params = new URLSearchParams(window.location.search);
const userIndex = params.get('product');

function nose (elemento){
            document.querySelector('.single').innerHTML +=
            `<a href='./single_product.html?product=${elemento.name}' class="tienda__item grid__cell--20" >
                <div class="item__image"></div>
                <h2 class="item__name">${elemento.name}</h2>
                <button class="item__button">buy</button>
            </a>`;
            
        }

nose()
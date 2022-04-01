export var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

fetch("./js/data.json")
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        const productos = response.products;
        productos.forEach(function(elemento){
            document.querySelector('.swiper-wrappe').innerHTML +=
            `<div class="swiper-slide">
                <img src="${elemento.image}" />
            </div>`
        })
        
    })
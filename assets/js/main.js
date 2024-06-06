const nav = document.getElementById('nav'),
      headerMenu = document.getElementById('header-menu'),
      navClose = document.getElementById('nav-close')

// mostrar menu
if(headerMenu){
   headerMenu.addEventListener('click', () =>{
      nav.classList.add('show-menu')
   })
}

// ocultar menu
if(navClose){
    navClose.addEventListener('click', () =>{
      nav.classList.remove('show-menu')
   })
}
// codigo del swiper
let swiperMovie = new Swiper('.movie__swiper', {
   loop: true,
   grabCursor: true,
   slidesPerView: 2,
   spaceBetween: 24,

   breakpoints:{
      440: {
         slidesPerView: 'auto',
      },
      768: {
         slidesPerView: 5,
      },
      1200: {
         slidesPerView: 5,
      },
   },
})
// codigo del swiper de nuevas peliculas
let swiperNew = new Swiper('.new__swiper', {
   loop: true,
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 2,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   breakpoints:{
      440: {
         centeredSlides: false,
         slidesPerView: 'auto',
      },
      768: {
         centeredSlides: false,
         slidesPerView: 4,
      },
      1200: {
         centeredSlides: false,
         slidesPerView: 5,
      },
   },
})

// codigo para header borroso
const blurHeader = () =>{
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('blur-header') 
                      : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

const header = document.querySelector('[data-header]');
window.addEventListener("scroll", function () {
    window.scrollY >= 400 ? header.classList.add("active") : header.classList.remove('active')
})


let navbar = document.querySelector('.navbar');
document.querySelector('#toggle-menu').onclick = () => {
    navbar.classList.toggle('active');
}
// let modalClose = document.querySelector('.close-btn')
// modalClose.addEventListener('click', function () {
//     navbar.classList.remove('active');
//     modalBg.classList.remove('bg-active')
// })


// modal 
let modalBtn = document.querySelector('#toggle-menu');
let modalBg = document.querySelector('.modal-bg');
modalBtn.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
})

let closeClickModal = document.querySelector('.modal-bg');
closeClickModal.addEventListener('click', function () {
    navbar.classList.remove('active');
    modalBg.classList.remove('bg-active');
    search.classList.remove('search-bar-active')
})
// search toggle 
let search = document.querySelector('.search-bar');
document.querySelector('#search-toggle').onclick = () => {
    search.classList.toggle('search-bar-active');
}

let searchBtn = document.querySelector('#search-toggle');
let modalSearchBg = document.querySelector('.modal-bg');
searchBtn.addEventListener('click', function () {
    modalSearchBg.classList.add('bg-active');
})

// sort featured product

// let layoutProduct = document.querySelector('.trending-layout');

// let liProduct = document.querySelector('.treding-categories');

// let categories = liProduct.querySelectorAll('li');

// Array.from(categories).forEach((item, index) => {
//     item.onclick = (e) => {
//         let currCat = liProduct.querySelector('li.active')
//         currCat.classList.remove('active')
//         e.target.classList.add('active')
//         foodMenuList.classList = 'trending-layout ' + e.target.getAttribute('data-featured-type')
//     }
// })

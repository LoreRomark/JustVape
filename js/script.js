// Show and hide background header by scroll ---------------------------------------------
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    
    header.classList.toggle('on', window.scrollY > 0);

});


// Show and close menu ------------------------------------------------
let iconMenu = document.getElementById('menu-btn');
let navbar = document.querySelector('.navbar');

window.addEventListener('click', function (e) {

    if (e.target.contains(iconMenu)) {
        // abrir y cerrar navbar con icono menu
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');

        iconMenu.classList.toggle('active');
        iconSearch.classList.remove('active');
        iconCart.classList.remove('active');

    } else if (e.target.parentNode.classList.contains('list-option')) {

        let subMenu = e.target.parentNode;
        subMenu.children[1].classList.toggle('active');

    }else if (!e.target.parentNode.classList.contains('list-option')) {

        
        let lists_option = document.querySelectorAll('.list-option');

        lists_option.forEach(element =>{
            element.children[1].classList.remove('active');
        })

        navbar.classList.remove('active');
        iconMenu.classList.remove('active');
    }
    
    if (e.target.contains(iconMenu) && !iconMenu.classList.contains('active')) {

        let lists_option = document.querySelectorAll('.list-option');

        lists_option.forEach(element =>{
            element.children[1].classList.remove('active');
        })

        navbar.classList.remove('active');
        iconMenu.classList.remove('active');
         
    }
    
    
});



// document.querySelector('#menu-btn').onclick = () => {
//     navbar.classList.toggle('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');

//     iconMenu.classList.toggle('active');
//     iconSearch.classList.remove('active');
//     iconCart.classList.remove('active');
// }



// Show and close search box --------------------------------------------------------------
let searchForm = document.querySelector('.search-form');
let iconSearch = document.querySelector('#search-btn');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');

    iconSearch.classList.toggle('active');
    iconMenu.classList.remove('active');
    iconCart.classList.remove('active');
}

// Show and close cart -------------------------------------------------
let cartItem = document.querySelector('.cart-items-container');
let iconCart = document.querySelector('#cart-btn');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');

    iconCart.classList.toggle('active');
    iconMenu.classList.remove('active');
    iconSearch.classList.remove('active');
}

// window.onscroll = () =>{
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');
// }

// simple opcion Show and hide submenu -------------------------------------------------------------
// let lists_items_click = document.querySelectorAll('.nav_link--click');

// lists_items_click.forEach(element => {
//     element.addEventListener('click', () => {
//         let height = 0;
//         let subMenu = element.nextElementSibling;
//         if(subMenu.clientHeight == "0"){
//             height = subMenu.scrollHeight;
//         }
//         subMenu.style.height = `${height}px`;
//     })
// });
// Show and hide background header by scroll ---------------------------------------------
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    
    header.classList.toggle('on', window.scrollY > 0);

});


// Show and close menu ------------------------------------------------
let iconMenu = document.getElementById('menu-btn');
let navbar = document.querySelector('.navbar');
let lists_items_click = document.querySelectorAll('.nav_link--click');

window.addEventListener('click', function (e) {

    if (e.target.contains(iconMenu)) {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');

        iconMenu.classList.toggle('active');
        iconSearch.classList.remove('active');
        iconCart.classList.remove('active');

    }else if (e.target.classList.contains('nav_link--click')) {
        
        lists_items_click.forEach(element => {
            let height = 0;
            let subMenu = element.nextElementSibling;
            if(subMenu.clientHeight == "0"){
                height = subMenu.scrollHeight;
            }
            subMenu.style.height = `${height}px`;
        });
    }
    if ( e.target.contains(iconMenu) && e.target.classList.contains('active' )){
        let list_show = document.querySelectorAll('.list-show');
        
        list_show.forEach(element => {
              
            element.style.height = "0px";
            
        });
    }
    if (!e.target.classList.contains('nav_link--click') && !e.target.contains(iconMenu)) {
        let list_show = document.querySelectorAll('.list-show');
        
        list_show.forEach(element => {
              
            element.style.height = "0px";
            
        });
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
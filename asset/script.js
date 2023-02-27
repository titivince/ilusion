window.onload = function() { /* start when html is ready */
var menu;

var nav = document.getElementById("nav");
var btn1 = document.getElementById("nav-1");
var btn2 = document.getElementById("nav-2");
var btn3 = document.getElementById("nav-3");
var btn4 = document.getElementById("nav-4");
var burger = document.getElementById("burger");

var topSection = document.getElementById("topSection");
var midleSection = document.getElementById("midleSection");
var bottomSection = document.getElementById("bottomSection");

var reservation = document.getElementById("reservation");
var response = document.getElementById("response");

function burgerOpen(){
    if (menu == true) {
        menu = false;
        burger.classList = "";
        nav.classList.remove("load");
        nav.classList.add("d-none");
    } else {
        menu = true;
        nav.classList.remove("d-none");
        nav.classList.add("load");
        burger.classList = "";
        burger.classList.add("open");
    }
}
function reserved(){
    response.classList = "";
}

function scrollToTopSection(){
    topSection.scrollIntoView({behavior: 'smooth'});
    burgerOpen();
}
function scrollToMidleSection(){
    midleSection.scrollIntoView({behavior: 'smooth'});
    burgerOpen();
}
function scrollToBottomSection(){
    bottomSection.scrollIntoView({behavior: 'smooth'});
    burgerOpen();
}
function scrollToFooter(){
    response.scrollIntoView({behavior: 'smooth'});
    burgerOpen();
}
burger.addEventListener("click", burgerOpen);

btn1.addEventListener("click", scrollToTopSection);
btn2.addEventListener("click", scrollToMidleSection);
btn3.addEventListener("click", scrollToBottomSection);
btn4.addEventListener("click", scrollToFooter);

if ( response != null ) {
    reservation.addEventListener("click", reserved);
}
}
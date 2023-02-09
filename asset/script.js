window.onload = function() { /* start when html is ready */

var btn0 = document.getElementById("nav-0");
var btn1 = document.getElementById("nav-1");
var btn2 = document.getElementById("nav-2");
var btn3 = document.getElementById("nav-3");

var topSection = document.getElementById("topSection");
var midleSection = document.getElementById("midleSection");
var bottomSection = document.getElementById("bottomSection");   

var reservation = document.getElementById("reservation");
var response = document.getElementById("response");

function reserved(){
    response.classList = "";
    response.className = "inline";
}

function topPage(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}
function scrollToTopSection(){
    topSection.scrollIntoView({behavior: 'smooth'});
}
function scrollToMidleSection(){
    midleSection.scrollIntoView({behavior: 'smooth'});
}
function scrollToBottomSection(){
    bottomSection.scrollIntoView({behavior: 'smooth'});
}

btn0.addEventListener("click", topPage);
btn1.addEventListener("click", scrollToTopSection);
btn2.addEventListener("click", scrollToMidleSection);
btn3.addEventListener("click", scrollToBottomSection);

reservation.addEventListener("click", reserved);
}
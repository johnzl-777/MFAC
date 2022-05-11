// Make nav bar disappear when user scrolls up

// var lastScrollTop;
// navbar = document.getElementById('navbar');

// window.addEventListener('scroll',function(){
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop){
//         navbar.style.top='-80px';
//     }
//     else {
//         navbar.style.top='0';
//     }
//     lastScrollTop = scrollTop;
// });

// ----------------------------------------------------------------------
// Add shadow to navbar when user scrolls down

// Listen: Wait for user to scroll
navbar = document.getElementById('navbar');
window.addEventListener('scroll',function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 10) {
        navbar.classList.add('floatingNav');
    } else {
        navbar.classList.remove('floatingNav');
    }
});

// ----------------------------------------------------------------------
// Show and remove a Scroll to Top button when user scrolls

// Listen: Wait for user to scroll
topButton = document.getElementById("topBtn");
window.addEventListener('scroll',function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 10 || document.scroll > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

// On click: Scroll to top button
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//-------------------------------------------------------------------------
// Shrink navbar to hamburger menu on smaller screens
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
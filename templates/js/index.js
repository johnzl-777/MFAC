// This makes nav bar disappear when user scrolls up
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

navbar = document.getElementById('navbar');
window.addEventListener('scroll',function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 10) {
        navbar.classList.add('floatingNav');
    } else {
        navbar.classList.remove('floatingNav');
    }
});
// Toggle Menu
let menuIcon = document.querySelector('#menu-icon'),
nav = document.querySelector('.nav'),
sections = document.querySelector('section'),
body = document.querySelector('body');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

// nav.addEventListener("click", function(){
//     menuIcon.classList.remove('bx-x');
//     nav.classList.remove("active");
// });

// sections.array.forEach(section => {
//     section.addEventListener("hover", function(){
//         menuIcon.classList.remove('bx-x');
//         nav.classList.remove("active");
//     });
// });

// sections.addEventListener("click", function(){
//     menuIcon.classList.remove('bx-x');
//     nav.classList.remove("active");
// });

// This doesn't work, I don't know why
// window.onscroll = ()=>{
//     console.log('scrolled');
//     menuIcon.classList.remove('bx-x');
//     nav.classList.remove("active");
// };

// // Active Section Detection
// let navlinks = document.querySelectorAll('header .header nav a');
// window.onscroll = () => {
//     menuIcon.classList.remove('bx-x');
//     nav.classList.remove("active");
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
//         console.log(id + ' ( ' + top + ' >= ' + offset + ' && ' + top + ' < ' + offset + ' + ' + height + ' )')
//         if(top >= offset && top < offset + height) {
//             navlinks.forEach(links => {
//                 // console.log(links)
//                 links.classList.remove('active');
//                 // console.log(document.querySelector('header nav a[href*=' + id + ']'))
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };

// ScrollReveal
// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 250
// });
// ScrollReveal().reveal('.home-content', { origin: 'top' });
// ScrollReveal().reveal('.home-img', { origin: 'bottom' });

// Typed.js
const typed = new Typed('#im-a', {
    strings: ['Front-End Web Developer', 'Back-End Web Developer', 'Graphic Designer', 'Android Application Developer', 'Scratch Scratcher'],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    typeDelay: 500,
    loop: true
});
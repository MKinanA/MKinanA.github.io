// Toggle Menu
let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');
let sections = document.querySelector('section');
let body = document.querySelector('.body');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

nav.addEventListener("click", function(){
    menuIcon.classList.remove('bx-x');
    nav.classList.remove("active");
});

sections.addEventListener("click", function(){
    menuIcon.classList.remove('bx-x');
    nav.classList.remove("active");
});

window.onscroll = ()=>{
    console.log('scrolled')
    menuIcon.classList.remove('bx-x');
    nav.classList.remove("active");
};

body.onscroll = ()=>{
    console.log('scrolled')
    menuIcon.classList.remove('bx-x');
    nav.classList.remove("active");
};

// Active Section Detection
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        console.log(id + ' ( ' + top + ' >= ' + offset + ' && ' + top + ' < ' + offset + ' + ' + height + ' )')
        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                // console.log(links)
                links.classList.remove('active');
                // console.log(document.querySelector('header nav a[href*=' + id + ']'))
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
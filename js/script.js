// // Active Section Detection
// let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header nav a');
// window.onscroll = () => {
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

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            const navLink = document.querySelector(`header nav a[href="#${id}"]`);

            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove("active"));
                navLink.classList.add("active");
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
// Thank you ChatGPT GPT-3.5 :))))
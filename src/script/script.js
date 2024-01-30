document.addEventListener('DOMContentLoaded', function() {

    const background = document.querySelector('body > .background'),
    hyperlinks = document.querySelectorAll('a'),
    images = document.querySelectorAll('img'),
    mes = document.querySelectorAll('.me'),
    projects_container = document.querySelector('section#projects > div:last-child');

    function set_background_size() {
        background.style.height = `${document.body.scrollHeight}px`;
    };
    set_background_size();

    window.onresize = set_background_size;

    hyperlinks.forEach(hyperlink => {
        if (hyperlink.hasAttribute('href') && hyperlink.getAttribute('href') !== '' && hyperlink.getAttribute('href')[0] === '#') {
            console.log(`hyperlink ${hyperlink} has a id-referring href attribute (${hyperlink.getAttribute('href')})`);
            hyperlink.onclick = function() {
                if (document.getElementById(hyperlink.getAttribute('href').slice(1)) != null) {
                    document.getElementById(hyperlink.getAttribute('href').slice(1)).scrollIntoView();
                };
                return false;
            };
        } else if (hyperlink.hasAttribute('href') && !hyperlink.hasAttribute('target') && hyperlink.getAttribute('href') !== '') {
            console.log(`hyperlink ${hyperlink} has a non-relative href attribute (${hyperlink.getAttribute('href')})`);
            hyperlink.setAttribute('target', '_blank')
        } else if (!hyperlink.hasAttribute('href') || hyperlink.getAttribute('href') === '') {
            console.log(`hyperlink ${hyperlink} doesn't have a href attribute (${hyperlink.getAttribute('href')})`);
            hyperlink.onclick = function() {
                return false;
            };
        };
    });

    images.forEach(image => {
        if (image.hasAttribute('alt') && !image.hasAttribute('title')) {
            image.setAttribute('title', image.getAttribute('alt'));
        } else if (!image.hasAttribute('alt') && image.hasAttribute('title')) {
            image.setAttribute('alt', image.getAttribute('title'));
        };
    });

    mes.forEach(me => {
        console.log(`found a ".me" (${me}), giving it a title`);
        me.setAttribute('title', 'Muhammad Kinan Ahsan');
    });

    const typed = new Typed('#typed', {
        strings: [
            'Front-End Web Developer',
            'Back-End Web Developer',
            'Full-Stack Web Developer',
            'Graphic Designer',
            'Android Application Developer',
            'Scratch Scratcher',
            'Python Programmer'
        ],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 2000,
        cursorChar: '|',
        shuffle: true,
        smartBackspace: true,
        loop: true
    });

    fetch('src/file/projects.json')
    .then(projects => {return projects.json()})
    .then(projects => {
        let projects_content = '';
        projects.forEach(project => {
            projects_content += `
                <div>
                    <div>
                        <iframe src="${project.url}" frameborder="0"></iframe>
                    </div>
                    <h2>${project.title}</h2>
                    <p>${project.desc}</p>
                </div>`;
        });
        projects_container.innerHTML = projects_content;
    });

});
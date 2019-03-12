'use strict';

const svgLight = document.querySelector('.svg_bg');
const svgDark = document.querySelector('.svg_bg_dark');
/*animations block*/
const arrAnimation = document.querySelectorAll('.animation');
const svg = document.querySelectorAll('.sv');
const svd = document.querySelectorAll('.svd');
/*lang*/
const en = document.querySelector('.en');
const ru = document.querySelector('.ru');

/*scroll reveal*/
const animation = document.querySelectorAll('.load');

const header = document.querySelector('.header_main');

document.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
       header.classList.add('scroll');
   }  else  {
       header.classList.remove('scroll');
   }
});

/*scroll reveal*/
if (animation.length > 0) {
    require('./modules/functions/scrollReveal')(animation);
}


svgLight.addEventListener('click', function (event) {
    event.preventDefault();
    this.classList.add('no_active');
    svgDark.classList.add('active');
    document.body.classList.add('active');
    setTimeout(() => {
        document.body.classList.add('dark');

    }, 0);
});

svgDark.addEventListener('click', function (event) {
    event.preventDefault();
    svgLight.classList.remove('no_active');
    svgDark.classList.remove('active');
    document.body.classList.remove('active');
    setTimeout(() => {
        document.body.classList.remove('dark');

    }, 0);
});


/*animation*/
let addAnimation = null;
if (arrAnimation.length > 0) {
    addAnimation = require('./animation');
    addAnimation(arrAnimation);
}

setTimeout(Light, 5000);

function Light() {
    document.body.addEventListener('mousemove', function (event) {
        let scrollY = event.clientY / 25;
        let scrollX = event.clientX / 25;
        svg[0].style.transition = '.1s linear 0s';
        svg[1].style.transition = '.1s linear 0s';
        svg[2].style.transition = '.1s linear 0s';

        svg[2].style.transform = `translate(${-scrollX / 2.5}px, ${-scrollY / 2.5}px)`;
        svg[1].style.transform = `translate(${-scrollX}px, ${-scrollY}px)`;
        svg[0].style.transform = `translate(${-scrollX * 1.2}px, ${-scrollY * 1.2}px)`;


    });
}

/*lang*/

en.addEventListener('click', (event) => {
    event.preventDefault();
    en.classList.add('active');
    ru.classList.remove('active');

    let url = 'en.json';
    let request = new XMLHttpRequest();

    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        let json = request.response;
        let nav = document.querySelectorAll('.header_main__menu > nav > ul > li > a');
        console.log(nav);
        for (let i = 0; i < nav.length; i++) {
            nav[0].innerHTML = json.menu[0].about;
            nav[1].innerHTML = json.menu[0].projects;
            nav[2].innerHTML = json.menu[0].contacts;
        }
    };



});

ru.addEventListener('click', (event) => {
    event.preventDefault();
    ru.classList.add('active');
    en.classList.remove('active');
});


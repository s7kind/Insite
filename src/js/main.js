'use strict';


const svgLight = document.querySelector('.svg_bg');
const svgDark = document.querySelector('.svg_bg_dark');

svgLight.addEventListener('click', function (event) {
    this.classList.add('no_active');
    svgDark.classList.add('active');
    setTimeout(()=> {
        document.body.classList.add('dark');
    }, 1000);
});

svgDark.addEventListener('click', function (event) {
    svgLight.classList.remove('no_active');
    svgDark.classList.remove('active');
    setTimeout(()=> {
        document.body.classList.remove('dark');
    }, 1000);
});


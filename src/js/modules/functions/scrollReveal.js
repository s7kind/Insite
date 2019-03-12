module.exports = (arr) => {
    const ScrollReveal = require('scrollreveal').default;

    const loadActive = {
        distance: '100px',
        origin: 'left',
        viewFactor: 0.15,
        opacity: 0,
        duration: 1200,
        interval: 400,
        delay: 100
    };

    ScrollReveal().reveal(arr, loadActive);


};
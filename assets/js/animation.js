/*===== animation =====*/
// scrollreveal.min.js

ScrollReveal().reveal('.contact__box',{
    origin: 'left',
    distance: '60px',
    duration: 2500,
    delay: 400,
    viewOffset: {
        top: 80,
    },
    reset: true
});

ScrollReveal().reveal('.about__group, .contact__form',{
    origin: 'right',
    distance: '60px',
    duration: 2500,
    delay: 400,
    interval: 100,
    viewOffset: {
        top: 80,
    },
    reset: true
});

ScrollReveal().reveal('.nums__card, .about__data, .footer',{
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    interval: 100,
    viewOffset: {
        top: 80,
    },
    reset: true
});

ScrollReveal().reveal('.projects__grid',{
    delay: 400,
    duration: 2500,
    distance: '60px',
    origin: 'top',
    interval: 100
});
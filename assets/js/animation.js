/*===== animation =====*/
// scrollreveal.min.js

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal(`.contact__box`, {origin: 'left'})
sr.reveal(`.about__group, .contact__form`, {origin: 'right', interval: 100})
sr.reveal(`.nums__card, .projects__grid, .about__data, .footer`, {interval: 100})
const sr = ScrollReveal({
    distance: '35px',
    duration: 2400,
    reset: false
});

sr.reveal('.logo', {delay:210, origin: 'left'});
sr.reveal('.navlist', {delay:310, origin: 'top'});
sr.reveal('.top-btnn', {delay:410, origin: 'right'});


const srs = ScrollReveal({
    distance: '35px',
    duration: 2400,
    reset: true
});

srs.reveal('.main-content h4', {delay:210, origin: 'top'});
srs.reveal('.main-content h1', {delay:310, origin: 'left'});
srs.reveal('.main-content p', {delay:410, origin: 'right'});
srs.reveal('.social', {delay:510, origin: 'left'});
srs.reveal('.main-btnn', {delay:610, origin: 'top'});
srs.reveal('.portfolio-content h1',{delay:110, origin: 'left'});
srs.reveal('.portfolio-content p',{delay:210, origin: 'top'});
srs.reveal('.portfolio-content h2',{delay:310, origin: 'left'});
srs.reveal('.project-details',{delay:410, origin: 'bottom'});
srs.reveal('.porfolio-image',{delay:510, origin: 'right'});

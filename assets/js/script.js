let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/* SCROLLREVEAL */

const sr = ScrollReveal({
  distance: '60px',
  duration: 1000,
  reset: true,
});

sr.reveal('.home', { delay: 50, origin: 'top' });
//sr.reveal('.home-text', {delay:200, origin:'top'})
//sr.reveal('.home-habilidades', {delay:200, origin:'top'})
//sr.reveal('.home-img', {delay:400, origin:'top'})
sr.reveal('.sobre, .servicos, .cta, .curriculo, .contato, .copyright', {
  delay: 50,
  origin: 'top',
});

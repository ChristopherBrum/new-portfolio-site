const closeNav = () => {
  const navToggle = document.querySelectorAll('.nav')[0];
  const navBtnToggle = document.querySelectorAll('.nav__btn')[0];
  const mainToggle = document.querySelectorAll('.main')[0];
  const menuToggle = document.querySelectorAll('.nav__list')[0];
  const headshotToggle = document.querySelectorAll('.nav__headshot')[0]; 
  const socialToggle = document.querySelectorAll('.nav__social-list')[0];

  navToggle.classList.toggle('nav--toggle');
  navBtnToggle.classList.toggle('nav__btn--toggle');
  mainToggle.classList.toggle('main--toggle');
  menuToggle.classList.toggle('nav__list--toggle');
  headshotToggle.classList.toggle('nav__headshot--toggle');
  socialToggle.classList.toggle('nav__social-list--toggle');
}

const navToggle = document.querySelector('.nav__btn');

navToggle.addEventListener("click", () => {
  document.body.classList.toggle('nav__open');
});


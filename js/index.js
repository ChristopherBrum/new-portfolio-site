const closeNav = () => {
  const navToggle = document.querySelectorAll('.nav')[0]
  const menuToggle = document.querySelectorAll('.nav__list')[0];
  const headshotToggle = document.querySelectorAll('.nav__headshot')[0]; 
  const socialToggle = document.querySelectorAll('.nav__social-list')[0];

  navToggle.classList.toggle('nav--toggle');
  menuToggle.classList.toggle('nav__list--toggle');
  headshotToggle.classList.toggle('nav__headshot--toggle');
  socialToggle.classList.toggle('nav__social-list--toggle');
}


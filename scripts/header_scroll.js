const header = document.querySelector('.header');
const offset = document.querySelector('.skills').offsetTop;

window.addEventListener('scroll', () => {
  if (window.scrollY >= offset) {
    header.classList.add('fixed');
    header.classList.add('smooth');
  } else {
    header.classList.remove('fixed');
    header.classList.remove('smooth');
  }
});
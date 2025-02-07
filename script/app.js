let lastScrollTop = 0;
navbar = document.querySelector(`#top-nav`);

window.addEventListener(`scroll`, () => {
  let scrollTop = window.pageYOffset || documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add(`active`);
  } else navbar.classList.remove(`active`);
  lastScrollTop = scrollTop;
})
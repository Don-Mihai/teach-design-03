const navLinks = document.querySelectorAll('.navigation__item');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // отменяем стандартное поведение ссылки
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const headerHeight = document.querySelector('.header').offsetHeight; // получаем высоту навбара
    const targetPosition = targetElement.offsetTop - headerHeight; // получаем позицию цели на странице

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth' // делаем скролл плавным
    });
  });
});
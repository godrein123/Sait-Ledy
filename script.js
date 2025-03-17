const stickyDiv = document.querySelector('.header_nav'); // Выбираем необходимый div
const stickyPoint = stickyDiv.offsetTop; // Точка, при достижении которой элемент становится фиксированным

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= stickyPoint) {
    stickyDiv.classList.add('nav_bar_fixtTop'); // Фиксируем элемент, когда прокрутили до нужной точки
  } else {
    stickyDiv.classList.remove('nav_bar_fixtTop'); // Освобождаем его, если скролл находится выше этой точки
  }
});
const parent = document.getElementById('HeadId');
const chaild = document.getElementById('contChaild');
const stickyDivBG = document.querySelector('conteaner');
const stickyDiv = document.querySelector('.header_nav'); // Выбираем необходимый div
const stickyPoint = stickyDiv.offsetHeight; // Точка, при достижении которой элемент становится фиксированным

window.addEventListener('scroll', () => {
  if (window.pageYOffset > stickyPoint) {
    stickyDiv.classList.add('nav_bar_fixtTop'); // Фиксируем элемент, когда прокрутили до нужной точки
    chaild.classList.remove('conteaner');
  } else {
    stickyDiv.classList.remove('nav_bar_fixtTop'); // Освобождаем его, если скролл находится выше этой точки
    chaild.classList.add('conteaner');
  }
}); 
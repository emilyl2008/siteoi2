const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  const info = card.querySelector('.info');

  card.addEventListener('mouseenter', () => {
    info.style.display = 'block';
  });

  card.addEventListener('mouseleave', () => {
    info.style.display = 'none';
  });
});

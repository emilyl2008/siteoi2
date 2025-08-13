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


const modal =document.querySelector('.modal');

function openModal(){
  modal.showModal();
}

function closeModal(){
  modal.close();
}
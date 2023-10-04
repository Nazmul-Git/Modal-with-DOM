'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnCloseModal);
// console.log(btnOpenModal);

const closeModal = () => {
  // its use to change js class
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

  //   same, its use to change css style
  //   modal.style.display='block';
  //   overlay.style.display='block';
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', () => {
    // console.log(btnOpenModal[i].textContent);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

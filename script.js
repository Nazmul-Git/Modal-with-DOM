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

const openModal=()=> {
    // console.log(btnOpenModal[i].textContent);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


//  how to response keyboard in event.????????
document.addEventListener('keydown', (e)=>{
    console.log(e);
    // output:
    // KeyboardEvent {isTrusted: true, key: 'Enter', code: 'KeyD', location: 0, ctrlKey: false, …}
    console.log(e.key);
    if(e.key==='Escape' && !modal.classList.contains('hidden')){
          closeModal();
    }

})
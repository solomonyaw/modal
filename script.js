'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnshowMondal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

let closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

let openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnshowMondal.length; i++) {
  btnshowMondal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

const clickedCard = document.querySelector(".carpool-list-card");
const modalCloseButton = document.querySelector(".modal-close");
const modal = document.querySelector(".modal-container");
// const clickedCard = document.getElementsByClassName('carpool-list-card');
// const modalCloseButton = document.getElementsByClassName(".modal-close");
// const modal = document.getElementsByClassName(".modal-container");


clickedCard.addEventListener('click', ()=>{
    modal.classList.remove('hidden');
});

modalCloseButton.addEventListener('click', ()=>{
    modal.classList.add('hidden');
});



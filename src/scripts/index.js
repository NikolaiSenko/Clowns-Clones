import { getMasonry } from "./masonry.js";
import { createCard } from "./templates.js";
import { renderBoard, deleteCard } from "./board.js";
import { showAddWindow, showChoiceWindow } from "./modal-windows.js";

document.addEventListener("DOMContentLoaded", app);

function app() {
  const header = document.querySelector("header");
  const [pinterestBtn, serch, selectBtn] = header.children;
  pinterestBtn.addEventListener("click", onBtn);
  serch.addEventListener("input", onSearch);
  selectBtn.addEventListener("change", onSelect);
  renderPinterest();
}

//Render
function renderPinterest() {
  const container = document.querySelector(".container");
  const heroBoard = document.querySelector(".hero-board");
  if (heroBoard !== null){
    heroBoard.remove();
  }
  container.innerHTML = "";
  fetch("https://615bec4fc298130017735e20.mockapi.io/posts")
    .then((response) => response.json())
    .then((response) => response.sort(() => Math.random() - 0.5))
    .then((response) => {
      let massCard = [];
      response.forEach((post) => massCard.push(createCard(post)));
      return massCard;
    })
    .then((massCard) => {
      massCard.forEach((card) => {
        card.addEventListener("click", onCard);
        container.append(card);
      });
      getMasonry();
    });
}

//Events Handler
function onBtn() {
  renderPinterest();
}

function onSearch() {
  console.log("Делает Леша");
}

function onSelect(event) {
  const value = event.target.value;
  if (value === 'animals'){
      renderBoard('Animals');
  }else if(value === 'films'){
      renderBoard('Films');
  }else if(value === 'others'){
      renderBoard('Others');
  }
}

function onCard(board) {
  const target = event.target
  const cardHeader = target.parentElement;
  const cardId = cardHeader.parentElement.id;
  if (target.className === 'card__button--top'){
    if(target.innerHTML === 'Сохранить'){
      showAddWindow(cardId);
    }else if(target.innerHTML === 'Удалить'){
      deleteCard(board, cardId);
    }
  }else if (target.className === 'card__button--bottom'){
    showChoiceWindow(cardId);
  }
}

export { onCard };
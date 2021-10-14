import { getMasonry } from "./components/masonry.js";
import { createCard } from "./components/templates.js";
import { renderBoard, deleteBoardCard } from "./components/board.js";
import { showAddWindow, showChoiceWindow } from "./components/modal-windows.js";
import { WEBSTORAGECONFIG } from "./config/constant-data.js"

document.addEventListener("DOMContentLoaded", app);


function app(){
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
  location.reload();
}

function onSearch() {
  console.log("Делает Леша");
}

function onSelect(event) {
  const {animals, films, others} = WEBSTORAGECONFIG;
  const value = event.target.value;
  if (value === "animals") {
    renderBoard(animals);
  } else if (value === "films") {
    renderBoard(films);
  } else if (value === "others") {
    renderBoard(others);
  }
}

function onCard(board) {
  const target = event.target;
  const cardHeader = target.parentElement;
  const cardId = cardHeader.parentElement.id;
  if (target.className === "card__button--top") {
    if (target.innerHTML === "Сохранить") {
      showAddWindow(cardId);
    } else if (target.innerHTML === "Удалить") {
      deleteBoardCard(board, cardId);
    }
  } else if (target.className === "card__button--bottom") {
    showChoiceWindow(cardId);
  }
}

export { onCard };

import { initMasonry } from "./masonry.js";
import { createCard } from "./templates.js";
import { renderBoard, deleteCard } from "./board.js";
import { showAddWindow, showChoiceWindow } from "./modal-windows.js";

document.addEventListener("DOMContentLoaded", app);

function app() {
  const header = document.querySelector("header");
  const [pinterestBtn, search, selectBtn] = header.children;
  pinterestBtn.addEventListener("click", onBtn);
  search.addEventListener("change", onSearch);
  selectBtn.addEventListener("change", onSelect);
  showPreloader();
  renderPinterest();
}

//Preloader
function showPreloader() {
  let preloader = document.getElementById("preloader");
  preloader.classList.add("hide-preloader");
  setInterval(() => {
    preloader.classList.add("preloader-hidden");
  }, 1500);
}

//Render
function renderPinterest() {
  getCards((massCards) => {
    const container = document.querySelector(".container");
    massCards.forEach((card) => {
      let createdCard = createCard(card);
      createdCard.addEventListener("click", onCard);
      container.append(createdCard);
    });
    initMasonry();
  });
}

function getCards(additionalMethod) {
  fetch("https://615bec4fc298130017735e20.mockapi.io/posts")
    .then((response) => response.json())
    .then((cards) => cards.sort(() => Math.random() - 0.5))
    .then((randomCards) => additionalMethod(randomCards));
}

//Events Handler
function onBtn() {
  location.reload();
}

function onSearch(e) {
  const input = e.target.value;
  if (input.length === 0) {
    renderPinterest();
  } else {
    getCards((randomObjects) => {
      const container = document.querySelector(".container");
      container.innerHTML = "";
      const filteredCards = randomObjects.filter((el) => {
        let intersect = el.description
          .toLowerCase()
          .split("#")
          .filter((value) =>
            input
              .toLowerCase()
              .split("#")
              .filter((e) => e !== "")
              .includes(value)
          );
        return intersect.length;
      });
      filteredCards.forEach((card) => {
        let createdCard = createCard(card);
        createdCard.addEventListener("click", onCard);
        container.append(createdCard);
      });
      initMasonry();
    });
  }
}

function onSelect(event) {
  const value = event.target.value;
  if (value === "animals") {
    renderBoard("Animals");
  } else if (value === "films") {
    renderBoard("Films");
  } else if (value === "others") {
    renderBoard("Others");
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
      deleteCard(board, cardId);
    }
  } else if (target.className === "card__button--bottom") {
    showChoiceWindow(cardId);
  }
}

export { onCard };

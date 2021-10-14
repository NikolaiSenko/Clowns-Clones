import { initMasonry } from "./components/masonry.js";
import { createCard } from "./components/templates.js";
import { renderBoard, deleteBoardCard } from "./components/board.js";
import { showAddWindow, showChoiceWindow } from "./components/modal-windows.js";
import { getCards } from "./components/fetchAPI.js";
import { WEBSTORAGECONFIG } from "./config/constant-data.js"

document.addEventListener("DOMContentLoaded", app);


function app(){
  const header = document.querySelector("header");
  const [pinterestBtn, search, selectBtn] = header.children;
  pinterestBtn.addEventListener("click", onBtn);
  search.addEventListener("change", onSearch);
  selectBtn.addEventListener("change", onSelect);
  renderPinterest();
  showPreloader();
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

//Events Handler
function onBtn() {
  location.reload();
}

function onSearch(e) {
  const input = e.target.value;
  if (input.length === 0) {
    location.reload();
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
      if (filteredCards.length !== 0) {
        filteredCards.forEach((card) => {
          let createdCard = createCard(card);
          createdCard.addEventListener("click", onCard);
          container.append(createdCard);
        });
      } else {
        const nothingFound = document.createElement("h2");
        nothingFound.innerHTML =
          "На нашем христианском сервер,ничего не найдено!!!";
        container.append(nothingFound);
      }
      initMasonry();
    });
  }
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

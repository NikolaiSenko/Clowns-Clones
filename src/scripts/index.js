import { initMasonry } from "./components/masonry.js";
import { createCard } from "./components/templates.js";
import { renderBoard, deleteBoardCard } from "./components/board.js";
import { showAddWindow, showChoiceWindow } from "./components/modal-windows.js";
import { loadCards, randomCards, renderCards } from "./components/fetchAPI.js";
import { WEBSTORAGECONFIG } from "./config/constant-data.js";

document.addEventListener("DOMContentLoaded", app);
const main = document.getElementById("main");

function app() {
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
  setTimeout(() => {
    preloader.classList.add("preloader-hidden");
  }, 1500);
}

//Render
function renderPinterest() {
  loadCards().then(randomCards).then(renderCards).catch(alert);
}

//Events Handler
function onBtn() {
  location.reload();
}

function onSearch(e) {
  const input = e.target.value;
  const section = document.querySelector(".hero-board");
  if (section === null) {
    if (input.length === 0) {
      location.reload();
    } else {
      loadCards()
        .then(randomCards)
        .then((response) => {
          const container = document.querySelector(".container");
          container.innerHTML = "";
          const filteredCards = response.filter((el) => {
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
            nothingFound.innerText =
              "На нашем христианском сервере,ничего не найдено!!!";
            container.append(nothingFound);
          }
          initMasonry();
        });
    }
  }
}

function onSelect(event) {
  const { animals, films, others } = WEBSTORAGECONFIG;
  const value = event.target.value;
  if (value === "animals") {
    renderBoard(main, animals);
  } else if (value === "films") {
    renderBoard(main, films);
  } else if (value === "others") {
    renderBoard(main, others);
  }
}

function onCard(board) {
  const target = event.target;
  const cardHeader = target.parentElement;
  const cardId = cardHeader.parentElement.id;
  if (target.className === "card__button--top") {
    if (target.innerHTML === "Сохранить") {
      showAddWindow(main, cardId);
    } else if (target.innerHTML === "Удалить") {
      deleteBoardCard(board, cardId);
    }
  } else if (target.className === "card__button--bottom") {
    showChoiceWindow(main, cardId);
  }
}

export { onCard, renderPinterest };

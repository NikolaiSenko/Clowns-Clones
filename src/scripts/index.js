import {
  sortCard,
  renderContainer,
  renderPreloader,
} from "./components/utils.js";
import { renderBoard, deleteBoardCard } from "./components/board.js";
import { showAddWindow, showChoiceWindow } from "./components/modal-windows.js";
import { loadCards, randomCards, renderCards } from "./components/fetchAPI.js";
import { WEBSTORAGECONFIG } from "./config/constant-data.js";

document.addEventListener("DOMContentLoaded", app);

function app() {
  const header = document.querySelector("header");
  const [pinterestBtn, search, selectBtn] = header.children;
  pinterestBtn.addEventListener("click", onBtn);
  search.addEventListener("change", onSearch);
  selectBtn.addEventListener("change", onSelect);
  renderPinterest();
  renderPreloader();
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
      const container = document.querySelector(".container");
      container.innerHTML = "";
      loadCards()
        .then(randomCards)
        .then((posts) => sortCard(posts, input))
        .then((posts) =>
          posts.length !== 0
            ? renderCards(posts) && renderPreloader()
            : renderContainer(input)
        )
        .catch(alert);
    }
  }
}

function onSelect(event) {
  const { animals, films, others } = WEBSTORAGECONFIG;
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

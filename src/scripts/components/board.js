import { createCard, createElement } from "./templates.js";
import { getStorageData, setStorageData } from "./storageApi.js";
import { initMasonry } from "./masonry.js";
import { showPreloader } from "./utils.js";
import { onCard } from "../index.js";

//Render
function renderBoard(board) {
  const preloader = createElement("div");
  preloader.id = "preloader";
  const preloaderGif = createElement("img");
  preloaderGif.setAttribute("alt", "preloader");
  preloaderGif.src = "img/preloader/Preloader-Gif.gif";
  preloader.append(preloaderGif);
  const main = document.getElementById("main");
  const standartOption = document.getElementById("choice");
  standartOption.hidden = true;
  const boardData = getStorageData(board);
  main.innerHTML = "";
  const headerBoard = createElement("section", "hero-board", board);
  const container = createElement("div", "container");
  fetch(`https://615bec4fc298130017735e20.mockapi.io/posts/`)
    .then((posts) => posts.json())
    .then((posts) =>
      posts.forEach((post) => {
        for (let i = 0; i < boardData.length; ++i) {
          if (post.id === boardData[i]) {
            const card = createCard(post);
            card.addEventListener("click", () => onCard(board));
            container.append(card);
            initMasonry();
          }
        }
      })
    );
  main.append(headerBoard, container, preloader);
  showPreloader();
}

function deleteBoardCard(board, cardId) {
  const boardData = getStorageData(board);
  const index = boardData.indexOf(cardId);
  boardData.splice(index, 1);
  setStorageData(board, boardData);
  renderBoard(board);
}

export { renderBoard, deleteBoardCard };

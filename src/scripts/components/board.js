import { createCard, createElement } from "./templates.js";
import { getStorageData, setStorageData } from "./storageApi.js";
import { initMasonry } from "./masonry.js";
import { onCard } from "../index.js";

//Render
function renderBoard(board) {
  const boardData = getStorageData(board);
  const main = document.querySelector("main");
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
  main.append(headerBoard, container);
}

function deleteBoardCard(board, cardId) {
  const boardData = getStorageData(board);
  const index = boardData.indexOf(cardId);
  boardData.splice(index, 1);
  setStorageData(board, boardData);
  renderBoard(board);
}

export { renderBoard, deleteBoardCard };

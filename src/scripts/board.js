import { createCard, createElement } from './templates.js';
import { getStorageData, setStorageData } from './storageApi.js';
import { getMasonry } from "./masonry.js";
import { onCard } from "./index.js";

//Render
function renderBoard(board){
    const main = document.querySelector("main");
    main.innerHTML = '';
    const headerBoard = createElement('section', 'hero-board', board);
    const container = createElement('div', 'container');
    main.append(headerBoard, container);
    renderBoardContent(board);
}

function renderBoardContent(board) {
    let boardData = getStorageData(board);
    const container = document.querySelector('.container');
    container.innerHTML = '';
    boardData.forEach(id => {
        fetch(`https://615bec4fc298130017735e20.mockapi.io/posts/${id}`)
        .then((response) => response.json())
        .then((response) => {
          const card = createCard(response);
          card.addEventListener("click", () => onCard(board));
          container.append(card);
          getMasonry();
        })
    });
}

function deleteCard(board, cardId){
    let boardData = getStorageData(board);
    let index = boardData.indexOf(cardId);
    boardData.splice(index,1);
    setStorageData(board, boardData);
    renderBoardContent(board);
}

export { renderBoard, deleteCard };
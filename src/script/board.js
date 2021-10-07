import {createHeaderBoard, createCard} from './templates.js';
function changeBoard(){
    const id = event.target.id;
    if (id === 'previous-board'){
        console.log('previous');
    }else if(id === 'next-board'){
        console.log('next');
    }
}

function renderBoard(board){
    document.body.innerHTML = '';
    const headerBoard = createHeaderBoard(board);
    const card = createCard();
    document.body.append(headerBoard, card);
}

export {renderBoard, changeBoard}
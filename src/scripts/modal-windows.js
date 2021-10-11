import { createAddWindow, createСhoiceWindow } from './templates.js';
import { getStorageData, setStorageData } from './storageApi.js';

const main = document.querySelector('.main');

//Create window
const addWindow = createAddWindow();
const сhoiceWindow = createСhoiceWindow();

//Function ON
function onBoardWindow(cardId){
    const target = event.target;
    if(target.id === 'animals-id'){
        const boardData = getStorageData('Animals');
        boardData.push(cardId);
        setStorageData('Animals', boardData);
        addWindow.remove();
        alert('Сохранено на доску Animals');
    }else if(target.id === 'films-id'){
        const boardData = getStorageData('Films');
        boardData.push(cardId);
        setStorageData('Films', boardData);
        addWindow.remove();
        alert('Сохранено на доску Films');
    }else if(target.id === 'others-id'){
        let boardData = getStorageData('Others');
        boardData.push(cardId);
        setStorageData('Others', boardData);
        alert('Сохранено на доску Others');
        addWindow.remove();
    }else if(target.id === 'btn-close'){
        addWindow.remove();
    }
}

function onСhoiceWindow(cardId){
    const target = event.target;
    if(target.id === 'btn-add'){
        showAddWindow(cardId);
    }else if(target.id === 'btn-complaint'){
       alert('в разработке')
    }else if(target.id === 'btn-close'){
        сhoiceWindow.remove();
    }
}

//Show window
function showChoiceWindow(cardId){
  сhoiceWindow.addEventListener('click', () => onСhoiceWindow(cardId));
    main.append(сhoiceWindow);
}

function showAddWindow(cardId){
    addWindow.addEventListener('click', () => onBoardWindow(cardId));
    main.append(addWindow);
}


export { showAddWindow, showChoiceWindow };
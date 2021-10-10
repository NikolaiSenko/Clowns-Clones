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
        let boardData = getStorageData('Animals');
        boardData.push(cardId);
        setStorageData('Animals', boardData);
        alert('Сохранено на доску Animals');
        addWindow.remove();
    }else if(target.id === 'films-id'){
        let boardData = getStorageData('Films');
        boardData.push(cardId);
        setStorageData('Films', boardData);
        alert('Сохранено на доску Films');
        addWindow.remove();
    }else if(target.id === 'others-id'){
        let boardData = getStorageData('Others');
        boardData.push(cardId);
        setStorageData('Others', boardData);
        console.log(cardId);
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
        showComplaintWindow();
    }else if(target.id === 'btn-close'){
        сhoiceWindow.remove();
    }
}

//Show window
function showChoiceWindow(cardId){
    bindChoiceWindow(сhoiceWindow, cardId);
    main.append(сhoiceWindow);
}

function showAddWindow(cardId){
    bindAddWindow(addWindow, cardId);
    main.append(addWindow);
}

function showComplaintWindow(){
    alert('Делает Маша!');
}

//Listeners
function bindAddWindow(addWindow, cardId){
    addWindow.addEventListener('click', () => onBoardWindow(cardId));
}

function bindChoiceWindow(сhoiceWindow, cardId){
    сhoiceWindow.addEventListener('click', () => onСhoiceWindow(cardId));
}

export { showAddWindow, showChoiceWindow };
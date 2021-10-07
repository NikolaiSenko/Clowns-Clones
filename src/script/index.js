import {createAddWindow, createСhoiceWindow} from './templates.js';
import {getStorageData, setStorageData} from './storageApi.js';

const main = document.querySelector('.main');
const selectBoard = document.querySelector('select');

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

function onCard(event){
    const btnSave = document.querySelectorAll('.card__button--top');
    const btnChoice = document.querySelectorAll('.card__button--bottom');
    const cardHeader = event.target.parentElement;
    const cardId = cardHeader.parentElement.id
    for (let save of btnSave){
        save.addEventListener('click', () => showAddWindow(cardId));
    }
    for (let choice of btnChoice){
        choice.addEventListener('click', () => showChoiceWindow(cardId));
    }
}

function onSelectBoard(event){
    const value = event.target.value;
    if (value === 'animals'){
        renderBoard('Animals');
    }else if(value === 'films'){
        renderBoard('Films');
    }else if(value === 'others'){
        renderBoard('Others');
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

//Listener
main.addEventListener('click', onCard);

selectBoard.addEventListener('change',onSelectBoard);

function bindAddWindow(addWindow, cardId){
    addWindow.addEventListener('click', () => onBoardWindow(cardId));
}

function bindChoiceWindow(сhoiceWindow, cardId){
    сhoiceWindow.addEventListener('click', () => onСhoiceWindow(cardId));
}

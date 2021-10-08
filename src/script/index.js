import {createAddWindow, createСhoiceWindow} from './templates.js';
import {getStorageData, setStorageData} from './storageApi.js';
import {renderBoard} from './board'


const main = document.querySelector('.main');
const selectBoard = document.querySelector('select');
let cardId = 0;

//Create window
const addWindow = createAddWindow();
const сhoiceWindow = createСhoiceWindow();

//Function ON
function onBoardWindow(){
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

function onСhoiceWindow(event){
    const target = event.target;
    if(target.id === 'btn-add'){
        showAddWindow();
    }else if(target.id === 'btn-complaint'){
        showComplaintWindow();
    }else if(target.id === 'btn-close'){
        сhoiceWindow.remove();
    }
}

//Show window
function showChoiceWindow(){
    main.append(сhoiceWindow);
}

function showAddWindow(){
    main.append(addWindow);
}

function showComplaintWindow(){
    alert('Делает Маша!');
}

//Listener
main.addEventListener('click', (event) => {
    const btnSave = document.querySelectorAll('.card__button--top');
    const btnChoice = document.querySelectorAll('.card__button--bottom');
    const cardHeader = event.target.parentElement;
    cardId = cardHeader.parentElement.id
    for (let save of btnSave){
        save.onclick =  function(){
            showAddWindow();
        }
    }
    for (let choice of btnChoice){
        choice.onclick = function(){
            showChoiceWindow();
        }
    }
})

selectBoard.addEventListener('change',(event) =>{
    const value = event.target.value;
    if (value === 'animals'){
        renderBoard('Animals');
    }else if(value === 'films'){
        renderBoard('Films');
    }else if(value === 'others'){
        renderBoard('Others');
    }
})

export {onBoardWindow, onСhoiceWindow}
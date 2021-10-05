import {createHeaderBoard, createAddWindow, createСhoiceWindow, createCard} from './templates.js';

const btnSave = document.querySelector('.card__button--top');
const btnChoice = document.querySelector('.card__button--bottom');
const modalActive = document.body;
const selectBoard = document.querySelector('select');

//Create window
const addWindow = createAddWindow();
const сhoiceWindow = createСhoiceWindow();

//Function ON
function onBoardWindow(event){
    const target = event.target;
    if(target.id === 'board1'){
        alert('Сохранено на доску 1')
    }else if(target.id === 'board2'){
        alert('Сохранено на доску 2');
    }else if(target.id === 'board3'){
        alert('Сохранено на доску 3'); 
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

//RENDER
function renderBoard(board){
    modalActive.innerHTML = '';
    const headerBoard = createHeaderBoard(board);
    const card = createCard();
    modalActive.append(headerBoard, card);
}

//Show window
function showChoiceWindow(){
    bindСhoiceWindow(сhoiceWindow);
    modalActive.append(сhoiceWindow);
}

function showAddWindow(){
    bindBoardWindow(addWindow);
    modalActive.append(addWindow);
}

function showComplaintWindow(){
    alert('Делает Маша!');
}

//Listener
btnSave.addEventListener('click', showAddWindow);
btnChoice.addEventListener('click', showChoiceWindow);

selectBoard.addEventListener('change',(event) =>{
    const value = event.target.value;
    if (value === 'desk1'){
        renderBoard('Доска 1');
    }else if(value === 'desk2'){
        renderBoard('Доска 2');
    }else if(value === 'desk3'){
        renderBoard('Доска 3');
    }
})

function bindBoardWindow(boardWindow){
    boardWindow.addEventListener('click', onBoardWindow); //функция навешивает слушатель событий на окно с досками
}

function bindСhoiceWindow(choiceWindow){
    choiceWindow.addEventListener('click', onСhoiceWindow); //функция навешивает слушатель событий на окно с выбором (добавить или пожаловаться)
}
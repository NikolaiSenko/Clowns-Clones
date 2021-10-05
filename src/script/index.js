import {createHeaderBoard, createAddWindow, createСhoiceWindow, createCard} from './templates.js';

const main = document.querySelector('.main');
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
    main.innerHTML = '';
    const headerBoard = createHeaderBoard(board);
    const card = createCard();
    main.append(headerBoard, card);
}

//Show window
function showChoiceWindow(){
    bindСhoiceWindow(сhoiceWindow);
    main.append(сhoiceWindow);
}

function showAddWindow(){
    bindBoardWindow(addWindow);
    main.append(addWindow);
}

function showComplaintWindow(){
    alert('Делает Маша!');
}

//Listener
main.addEventListener('click', (event) => {
    const btnSave = document.querySelectorAll('.card__button--top');
    const btnChoice = document.querySelectorAll('.card__button--bottom');
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
<<<<<<< HEAD
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
=======
import { createAddWindow, createСhoiceWindow } from "./templates.js";
import { getStorageData, setStorageData } from "./storageApi.js";

const main = document.querySelector(".main");

//Function ON
function onBoardWindow(cardId) {
  const target = event.target;
  const addWindow = document.querySelector(".background-window");
  if (target.id === "animals-id") {
    const boardData = getStorageData("Animals");
    boardData.push(cardId);
    setStorageData("Animals", boardData);
    addWindow.remove();
    alert("Сохранено на доску Animals");
  } else if (target.id === "films-id") {
    const boardData = getStorageData("Films");
    boardData.push(cardId);
    setStorageData("Films", boardData);
    addWindow.remove();
    alert("Сохранено на доску Films");
  } else if (target.id === "others-id") {
    let boardData = getStorageData("Others");
    boardData.push(cardId);
    setStorageData("Others", boardData);
    alert("Сохранено на доску Others");
    addWindow.remove();
  } else if (target.id === "btn-close") {
    addWindow.remove();
  }
}

function onСhoiceWindow(cardId) {
  const choiceWindow = document.querySelector(".background-window");
  console.log(choiceWindow)
  const target = event.target;
  if (target.id === "btn-add") {
    showAddWindow(cardId);
    choiceWindow.remove();
  } else if (target.id === "btn-complaint") {
    alert("в разработке");
  } else if (target.id === "btn-close") {
    choiceWindow.remove();
  }
}

//Show window
function showChoiceWindow(cardId) {
  const сhoiceWindow = createСhoiceWindow();
  сhoiceWindow.addEventListener("click", () => onСhoiceWindow(cardId));
  main.append(сhoiceWindow);
}

function showAddWindow(cardId) {
  const addWindow = createAddWindow();
  addWindow.addEventListener("click", () => onBoardWindow(cardId));
  main.append(addWindow);
}

export { showAddWindow, showChoiceWindow };
>>>>>>> pinterest-dev

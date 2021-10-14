import { createAddWindow, createСhoiceWindow } from "./templates.js";
import { getStorageData, setStorageData } from "./storageApi.js";
import { deleteCard } from "./utils.js";

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
    deleteCard(cardId);
    alert("Сохранено на доску Animals");
  } else if (target.id === "films-id") {
    const boardData = getStorageData("Films");
    boardData.push(cardId);
    setStorageData("Films", boardData);
    addWindow.remove();
    deleteCard(cardId);
    alert("Сохранено на доску Films");
  } else if (target.id === "others-id") {
    let boardData = getStorageData("Others");
    boardData.push(cardId);
    setStorageData("Others", boardData);
    alert("Сохранено на доску Others");
    addWindow.remove();
    deleteCard(cardId);
  } else if (target.id === "btn-close") {
    addWindow.remove();
  }
}

function onСhoiceWindow(cardId) {
  const choiceWindow = document.querySelector(".background-window");
  console.log(choiceWindow);
  const target = event.target;
  if (target.id === "btn-add") {
    showAddWindow(cardId);
    choiceWindow.remove();
  } else if (target.id === "btn-complaint") {
    deleteCard(cardId);
    choiceWindow.remove();
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

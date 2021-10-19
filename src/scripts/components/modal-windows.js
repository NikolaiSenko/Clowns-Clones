import { createAddWindow, createСhoiceWindow } from "./templates.js";
import { getStorageData, setStorageData } from "./storageApi.js";
import { deleteCard, showMessage } from "./utils.js";
import { WEBSTORAGECONFIG } from "../config/constant-data.js";
import {createReportWindow} from "./modalReport.js"

//Function ON
function onBoardWindow(cardId) {
  const { animals, films, others } = WEBSTORAGECONFIG;
  const target = event.target;
  const addWindow = document.querySelector(".background-window");
  switch (target.id) {
    case "animals-id":
      const boardDataAnimals = getStorageData(animals);
      boardDataAnimals.push(cardId);
      setStorageData(animals, boardDataAnimals);
      addWindow.remove();
      showMessage("Сохранено на доску Animals");
      break;
    case "films-id":
      const boardDataFilms = getStorageData(films);
      boardDataFilms.push(cardId);
      setStorageData(films, boardDataFilms);
      addWindow.remove();
      showMessage("Сохранено на доску Films");
      break;
    case "others-id":
      const boardDataOthers = getStorageData(others);
      boardDataOthers.push(cardId);
      setStorageData(others, boardDataOthers);
      addWindow.remove();
      showMessage("Сохранено на доску Others");
      break;
    case "btn-close":
    case "background-window":
      addWindow.remove();
      break;
  }
}

function onСhoiceWindow(cardId) {
  const choiceWindow = document.querySelector(".background-window");
  const target = event.target;
  switch (target.id) {
    case "btn-add":
      showAddWindow(cardId);
      choiceWindow.remove();
      break;
    case "btn-complaint":
      showReportWindow(cardId);
      choiceWindow.remove();
      break;
    case "btn-close":
    case "background-window":
      choiceWindow.remove();
      break;
  }
}

function onReportWindow(cardId){
  const reportWindow = document.querySelector('.background-window');
  const target = event.target;
  switch (target.id) {
  case 'btn-submit':
    deleteCard(cardId);
    reportWindow.remove();
    showMessage('Ваша жалоба отправлена!')
    break;
   case 'btn-cancel':
    case "background-window":
      reportWindow.remove();
      break;
  }
}

//Show window
function showReportWindow(cardId){
  const reportWindow = createReportWindow();
  reportWindow.addEventListener("click", () => onReportWindow(cardId));
  document.body.addEventListener("keydown", (event) => {
    if (event.keyCode === 27){
      reportWindow.remove();
    }
  });
  document.body.append(reportWindow);
}

function showChoiceWindow(cardId) {
  const choiceWindow = createСhoiceWindow();
  choiceWindow.addEventListener("click", () => onСhoiceWindow(cardId));
  document.body.addEventListener("keydown", (event) => {
    if (event.keyCode === 27){
      choiceWindow.remove();
    }
  });
  document.body.append(choiceWindow);
}

function showAddWindow(cardId) {
  const addWindow = createAddWindow();
  addWindow.addEventListener("click", () => onBoardWindow(cardId));
  document.body.addEventListener("keydown", (event) => {
    if (event.keyCode === 27){
      addWindow.remove();
    }
  });
  document.body.append(addWindow);
}

export { showAddWindow, showChoiceWindow };
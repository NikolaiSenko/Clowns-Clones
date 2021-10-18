import { createAddWindow, createСhoiceWindow, createMessageWindow } from "./templates.js";
import { getStorageData, setStorageData } from "./storageApi.js";
import { deleteCard, showMassage } from "./utils.js";
import { WEBSTORAGECONFIG } from "../config/constant-data.js";

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
      showMassage("Сохранено на доску Animals");
      break;
    case "films-id":
      const boardDataFilms = getStorageData(films);
      boardDataFilms.push(cardId);
      setStorageData(films, boardDataFilms);
      addWindow.remove();
      showMassage("Сохранено на доску Films");
      break;
    case "others-id":
      const boardDataOthers = getStorageData(others);
      boardDataOthers.push(cardId);
      setStorageData(others, boardDataOthers);
      addWindow.remove();
      showMassage("Сохранено на доску Others");
      break;
    case "btn-close":
    case "":
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
      deleteCard(cardId);
      choiceWindow.remove();
      break;
    case "btn-close":
    case "":
      choiceWindow.remove();
      break;
  }
}

//Show window
function showChoiceWindow(cardId) {
  const сhoiceWindow = createСhoiceWindow();
  сhoiceWindow.addEventListener("click", () => onСhoiceWindow(cardId));
  document.body.addEventListener("keydown", (event) => {
    if (event.keyCode === 27){
      сhoiceWindow.remove();
    }
  });
  document.body.append(сhoiceWindow);
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
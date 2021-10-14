import { createAddWindow, createСhoiceWindow } from "./templates.js";
import { getStorageData, setStorageData } from "./storageApi.js";
import { deleteCard } from "./utils.js";
import { WEBSTORAGECONFIG } from "../config/constant-data.js"

const main = document.getElementById("main");


//Function ON
function onBoardWindow(cardId) {
  const {animals, films, others} = WEBSTORAGECONFIG;
  const target = event.target;
  const addWindow = document.querySelector(".background-window");
  switch (target.id) {
    case "animals-id":
      const boardDataAnimals = getStorageData(animals);
      boardDataAnimals.push(cardId);
      setStorageData(animals, boardDataAnimals);
      addWindow.remove();
      alert("Сохранено на доску Animals");
      deleteCard(cardId);
      break;
    case "films-id":
      const boardDataFilms = getStorageData(films);
      boardDataFilms.push(cardId);
      setStorageData(films, boardDataFilms);
      addWindow.remove();
      alert("Сохранено на доску Films");
      deleteCard(cardId);
      break;
    case "others-id":
      const boardDataOthers = getStorageData(others);
      boardDataOthers.push(cardId);
      setStorageData(others, boardDataOthers);
      addWindow.remove();
      alert("Сохранено на доску Others");
      deleteCard(cardId);
      break;
    case "btn-close":
      addWindow.remove();
      break;
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

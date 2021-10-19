import { WEBSTORAGECONFIG } from "../config/constant-data.js";
function createElement(tag, className, text = "") {
  const element = document.createElement(tag);
  const textNode = document.createTextNode(text);
  element.className = className;
  element.append(textNode);
  return element;
}

function createCard({ image, avatar, description, id } = post) {
  const heroBoard = document.querySelector(".hero-board");
  const card = createElement("div", "card");
  card.id = id;
  const cardHeader = createElement("div", "card__header");
  const imgMain = createElement("img", "card__pictures");
  imgMain.src = image;
  imgMain.setAttribute("crossorigin", "");
  const buttonCardTop = createElement("button", "card__button--top");
  if (heroBoard !== null) {
    buttonCardTop.innerHTML = "Удалить";
  } else {
    buttonCardTop.innerHTML = "Сохранить";
  }
  const buttonCardBottom = createElement("button", "card__button--bottom");
  const cardFooter = createElement("div", "card__footer");
  const imgAvatars = createElement("img", "card__avatars");
  imgAvatars.src = avatar;
  const descriptions = createElement("p", "card__descriptions", description);
  cardHeader.append(imgMain, buttonCardTop, buttonCardBottom);
  cardFooter.append(imgAvatars, descriptions);
  card.append(cardHeader, cardFooter);
  return card;
}

function createAddWindow() {
  const { animals, films, others } = WEBSTORAGECONFIG;
  const windowAdd = createElement("div", "background-window");
  windowAdd.id = "background-window";
  const modalAdd = createElement("div", "add-window");
  const title = createElement(
    "div",
    "title-modal-window",
    "Сохраните пост на доску"
  );
  const firstBoard = createElement("button", "btn-choice-board", animals);
  firstBoard.id = "animals-id";
  const secondBoard = createElement("button", "btn-choice-board", films);
  secondBoard.id = "films-id";
  const thirdBoard = createElement("button", "btn-choice-board", others);
  thirdBoard.id = "others-id";
  const btnClose = createElement("button", "btn-close", "Отмена");
  btnClose.id = "btn-close";
  const section = document.querySelector("section");
  if (section !== null) {
    firstBoard.hidden = section.outerText === "Animals" ? true : false;
    secondBoard.hidden = section.outerText === "Films" ? true : false;
    thirdBoard.hidden = section.outerText === "Others" ? true : false;
  }
  modalAdd.append(title, firstBoard, secondBoard, thirdBoard, btnClose);
  windowAdd.append(modalAdd);
  return windowAdd;
}

function createСhoiceWindow() {
  const modalChoice = createElement("div", "background-window");
  modalChoice.id = "background-window";
  const modalSelection = createElement("div", "choice-window");
  const btnAdd = createElement("button", "choice-btn", "Добавить на доску");
  btnAdd.id = "btn-add";
  const btnСomplaint = createElement("button", "choice-btn", "Пожаловаться");
  btnСomplaint.id = "btn-complaint";
  const btnClose = createElement("button", "btn-close", "Отмена");
  btnClose.id = "btn-close";
  modalSelection.append(btnAdd, btnСomplaint, btnClose);
  modalChoice.append(modalSelection);

  return modalChoice;
}

function createMessageWindow(message) {
  const messageWindow = createElement("div", "background-window");
  const newMessage = createElement("div", "message", message);
  messageWindow.append(newMessage);
  return messageWindow;
}

export {
  createCard,
  createAddWindow,
  createСhoiceWindow,
  createElement,
  createMessageWindow,
};

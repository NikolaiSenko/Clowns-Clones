function createElement(tag, className, text = "") {
  const element = document.createElement(tag);
  const textNode = document.createTextNode(text);
  element.className = className;
  element.append(textNode);
  return element;
}

function createCard({ Image, avatar, Description, id } = post) {
  const heroBoard = document.querySelector(".hero-board");
  let card = createElement("div", "card");
  card.id = `${id}`;
  let cardHeader = createElement("div", "card__header");
  let imgMain = createElement("img", "card__pictures");
  imgMain.src = Image;
  imgMain.setAttribute("crossorigin", "");
  let buttonCardTop = createElement("button", "card__button--top");
  if (heroBoard !== null){
    buttonCardTop.innerHTML = 'Удалить';
  }else{
    buttonCardTop.innerHTML = 'Сохранить';
  }
  let buttonCardBottom = createElement("button", "card__button--bottom");
  let cardFooter = createElement("div", "card__footer");
  let imgAvatars = createElement("img", "card__avatars");
  imgAvatars.src = avatar;
  let descriptions = createElement("p", "card__descriptions", `${Description}`);
  cardHeader.append(imgMain, buttonCardTop, buttonCardBottom);
  cardFooter.append(imgAvatars, descriptions);
  card.append(cardHeader, cardFooter);
  return card;
}

function createAddWindow(){
  const windowAdd = createElement('div', 'background-window');
  const modalAdd = createElement('div', 'add-window');
  const firstBoard = createElement('button', 'btn-choice-board', 'Animals');
  firstBoard.id = 'animals-id';
  const secondBoard = createElement('button', 'btn-choice-board', 'Films');
  secondBoard.id = 'films-id';
  const thirdBoard = createElement('button', 'btn-choice-board', 'Others');
  thirdBoard.id = 'others-id';
  const btnClose = createElement('button', 'btn-close', 'Отмена');
  btnClose.id = 'btn-close';
  modalAdd.append(firstBoard, secondBoard, thirdBoard, btnClose);
  windowAdd.append(modalAdd);
  return windowAdd;
}

function createСhoiceWindow(){
  const modalChoice = createElement('div', 'background-window');
  const modalSelection = createElement('div', 'choice-window');
  const btnAdd = createElement('button', 'choice-btn', 'Добавить на доску');
  btnAdd.id = 'btn-add';
  const btnСomplaint = createElement('button', 'choice-btn', 'Пожаловаться');
  btnСomplaint.id = 'btn-complaint';
  const btnClose = createElement('button', 'btn-close', 'Отмена');
  btnClose.id = 'btn-close'
  modalSelection.append(btnAdd, btnСomplaint, btnClose);
  modalChoice.append(modalSelection);

  return modalChoice;
}

export { createCard, createAddWindow, createСhoiceWindow, createElement };
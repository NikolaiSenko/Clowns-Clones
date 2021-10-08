function createHeaderBoard(board){
    const headerBoard = createElement('div');
    const header = createElement('header', 'header');
    const btnHeader = createElement('button', 'header__button', 'Pinterest');
    const inputHeader = createElement('input', 'header__search');
    
    const hero = createElement('section', 'hero-board');
    const heroPrevious = createElement('div', 'hero__previous', '<');
    heroPrevious.id = 'previous-board'
    const heroDescription = createElement('p', 'hero__description', board);
    const heroNext = createElement('div', 'hero__next', '>');
    heroNext.id = 'next-board'
    hero.addEventListener('click', changeBoard);

    hero.append(heroPrevious, heroDescription, heroNext);
    header.append(btnHeader, inputHeader);
    headerBoard.append(header, hero);
    return headerBoard;
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

function createCard(linkImgCard, linkImgAvatar){
    const card = createElement('div', 'card');
    const cardHeader = createElement('div', 'card__header');
    const cardPictures = createElement('img', 'card__pictures');
    cardPictures.src = linkImgCard
    const cardBtnTop = createElement('buttom', 'card__button__top', 'Сохранить');
    const cardBtnBottom = createElement('buttom', 'card__button__bottom', '...');
    const cardFooter = createElement('div', 'card__footer');
    const cardAvatars = createElement('img', 'card__avatars');
    cardAvatars.src = linkImgAvatar;
    const cardDescription = createElement('div', 'card__descriptions', 'Lora');

    cardHeader.append(cardPictures, cardBtnTop, cardBtnBottom);
    cardFooter.append(cardAvatars, cardDescription);
    card.append(cardHeader, cardFooter);

    return card;
}

function createElement(element, className, text = ''){
    const newElement = document.createElement(element);
    const textElement = document.createTextNode(text);
    newElement.className = className;
    newElement.append(textElement);

    return newElement;
}

export {createHeaderBoard, createAddWindow, createСhoiceWindow, createCard}
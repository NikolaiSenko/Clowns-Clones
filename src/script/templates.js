function createHeaderBoard(board){
    const headerBoard = createElement('div');
    const header = createElement('header','','header');
    const btnHeader = createElement('button','Pinterest','header__button');
    const inputHeader = createElement('input', '','header__search');
    
    const hero = createElement('section','','hero');
    const heroPrevious = createElement('div','<','hero__previous');
    const heroDescription = createElement('p', board, 'hero__description');
    const heroNext = createElement('div','>','hero__next');

    hero.append(heroPrevious, heroDescription, heroNext);
    header.append(btnHeader, inputHeader);
    headerBoard.append(header, hero);
    return headerBoard;
}

function createAddWindow(){
    const windowAdd = createElement('div', '','background-window');
    const modalAdd = createElement('div', '','add-window');
    const firstBoard = createElement('button', 'Доска 1','btn-choice-board', 'board1');
    const secondBoard = createElement('button', 'Доска 2','btn-choice-board', 'board2');
    const thirdBoard = createElement('button', 'Доска 3','btn-choice-board', 'board3');
    const btnClose = createElement('button', 'Отмена', 'btn-close','btn-close');
    modalAdd.append(firstBoard, secondBoard, thirdBoard, btnClose);
    windowAdd.append(modalAdd);
    return windowAdd;
}

function createСhoiceWindow(){
    const modalChoice = createElement('div', '','background-window');
    const modalSelection = createElement('div', '','choice-window');
    const btnAdd = createElement('button', 'Добавить на доску','choice-btn','btn-add');
    const btnСomplaint = createElement('button', 'Пожаловаться','choice-btn','btn-complaint');
    const btnClose = createElement('button', 'Отмена', 'btn-close','btn-close');
    modalSelection.append(btnAdd, btnСomplaint, btnClose);
    modalChoice.append(modalSelection);

    return modalChoice;
}

function createCard(linkImgCard, linkImgAvatar){
    const card = createElement('div','','card');
    const cardHeader = createElement('div','','card__header');
    const cardPictures = createElement('img','','card__pictures');
    cardPictures.src = linkImgCard
    const cardBtnTop = createElement('buttom','Сохранить','card__button__top');
    const cardBtnBottom = createElement('buttom','&bull;&bull;&bull;','card__button__bottom');
    const cardFooter = createElement('div','','card__footer');
    const cardAvatars = createElement('img','','card__avatars');
    cardAvatars.src = linkImgAvatar;
    const cardDescription = createElement('div','Lora','card__descriptions');

    cardHeader.append(cardPictures, cardBtnTop, cardBtnBottom);
    cardFooter.append(cardAvatars, cardDescription);
    card.append(cardHeader, cardFooter);

    return card;
}

function createElement(element, text = '', className, id){
    const newElement = document.createElement(element);
    const textElement = document.createTextNode(text);
    newElement.className = className;
    newElement.id = id;
    newElement.append(textElement);

    return newElement;
}

export {createHeaderBoard, createAddWindow, createСhoiceWindow, createCard}
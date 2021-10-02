const btnActive = document.querySelector('#btnActive');
const modalActive = document.querySelector('body');

//Create window
const сhoiceWindow = createСhoiceWindow();
const addWindow = createAddWindow();

//Function ON
function onСhoiceWindow(event){
    const target = event.target;
    if(target.id === 'btn-add'){
        showAddWindow();
    }else if(target.id === 'btn-complaint'){
        showComplaintWindow();
    }
}

function onBoardWindow(event){
    const target = event.target;
    if(target.id === 'board1'){
        addWindow.innerHTML = '';
        alert ('Доска 1');
    }else if(target.id === 'board2'){
        addWindow.innerHTML = '';
        alert ('Доска 2');
    }else if(target.id === 'board3'){
        addWindow.innerHTML = '';
        alert ('Доска 3'); 
    }
}

//Show window
function showChoiceWindow(){
    bindСhoiceWindow(сhoiceWindow);
    modalActive.append(сhoiceWindow);
}

function showAddWindow(){
    bindBoardWindow(addWindow)
    modalActive.append(addWindow);
    сhoiceWindow.innerHTML = '';
}

function showComplaintWindow(){
    alert('Доделает Маша');
}

//Listener
btnActive.addEventListener('click', showChoiceWindow);

function bindСhoiceWindow(choiceWindow){
    choiceWindow.addEventListener('click', onСhoiceWindow);
}

function bindBoardWindow(boardWindow){
    boardWindow.addEventListener('click', onBoardWindow);
}

//Temlates
function createСhoiceWindow(){
    const backgroundModal = createElement('div', '','background-window');
    const modalSelection = createElement('div', '','choice-window');
    const btnAdd = createElement('button', 'Добавить на доску','choice-btn','btn-add');
    const btnСomplaint = createElement('button', 'Пожаловаться','choice-btn','btn-complaint');
    
    modalSelection.append(btnAdd, btnСomplaint)
    backgroundModal.append(modalSelection)
    return backgroundModal;
}

function createAddWindow(){
    const windowAdd = createElement('div', '','background-window');
    const modalAdd = createElement('div', '','add-window');
    const firstBoard = createElement('button', 'Доска 1','btn-choice-board', 'board1');
    const secondBoard = createElement('button', 'Доска 2','btn-choice-board', 'board2');
    const thirdBoard = createElement('button', 'Доска 3','btn-choice-board', 'board3');

    modalAdd.append(firstBoard, secondBoard, thirdBoard);
    windowAdd.append(modalAdd);
    return windowAdd;
}


function createElement (element, text = '', className, id){
    const newElement = document.createElement(element);
    const textElement = document.createTextNode(text);
    newElement.className = className;
    newElement.id = id;
    newElement.append(textElement);

    return newElement;
}
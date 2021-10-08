function getStorageData(board){
    const boardData = JSON.parse(localStorage.getItem(board));
    if(boardData){
        return boardData;
    }
    return [];
}

function setStorageData(boardIndex, boardData){
    localStorage.setItem(boardIndex, JSON.stringify(boardData));
}

export {getStorageData, setStorageData};
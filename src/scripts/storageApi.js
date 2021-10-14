function getStorageData(board) {
  const boardData = JSON.parse(localStorage.getItem(board));
  return boardData ? boardData : [];
}

function setStorageData(boardIndex, boardData) {
  localStorage.setItem(boardIndex, JSON.stringify(boardData));
}

export { getStorageData, setStorageData };

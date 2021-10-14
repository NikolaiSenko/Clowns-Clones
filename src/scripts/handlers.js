import {getMasonry} from "./masonry.js"
function deleteCard(cardId) {
  const card = document.getElementById(cardId);
  card.remove();
  getMasonry();
}
export {deleteCard}

import { initMasonry } from "./masonry.js";
function deleteCard(cardId) {
  const card = document.getElementById(cardId);
  card.remove();
  initMasonry();
}
export { deleteCard };

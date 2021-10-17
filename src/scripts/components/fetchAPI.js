import { onCard } from "../index.js";
import { createCard } from "./templates.js";
import { initMasonry } from "./masonry";

function loadCards() {
  return fetch("https://615bec4fc298130017735e20.mockapi.io/posts").then(
    (posts) => posts.json()
  );
}

function randomCards(posts) {
  return posts.sort(() => Math.random() - 0.5);
}

function renderCards(posts) {
  return new Promise(function (resolve) {
    const container = document.querySelector(".container");
    posts.forEach((card) => {
      let createdCard = createCard(card);
      createdCard.addEventListener("click", onCard);
      container.append(createdCard);
    });
    resolve(initMasonry());
  });
}
export { loadCards, randomCards, renderCards };

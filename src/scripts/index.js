import { getMasonry } from "./masonry.js";
import { createCard } from "./templates.js";

document.addEventListener("DOMConteneLoaded", app());

function app() {
  // getStorageData();
  const [header] = document.body.children;
  const [pinterestBtn, serch, selectBtn] = header.children;
  pinterestBtn.addEventListener("click", onBtn);
  serch.addEventListener("input", onSerch);
  selectBtn.addEventListener("click", onSelect);
  renderTodos();
}

//Render
function renderTodos() {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  fetch("https://615bec4fc298130017735e20.mockapi.io/posts")
    .then((response) => response.json())
    .then((response) => response.sort(() => Math.random() - 0.5))
    .then((response) => {
      let masCard = [];
      response.forEach((post) => masCard.push(createCard(post)));
      return masCard;
    })
    .then((massCard) => {
      massCard.forEach((card) => {
        card.addEventListener("click", onCard);
        container.append(card);
      });
      getMasonry();
    });
}
//Events Handler
function onBtn() {
  renderTodos();
}

function onSerch() {
  console.log("1");
}
function onSelect() {
  console.log("2");
}
function onCard() {
  console.log("3");
}

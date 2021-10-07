import { getMasonry } from "./masonry.js";
import { createCard } from "./templates.js";

document.addEventListener("DOMConteneLoaded", app());

function app() {
  // getStorageData();
  const header = document.querySelector("header");
  const [pinterestBtn, serch, selectBtn] = header.children;
  pinterestBtn.addEventListener("click", onBtn);
  serch.addEventListener("input", onSearch);
  selectBtn.addEventListener("click", onSelect);
  renderPinterest();
}

//Render
function renderPinterest() {
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
  renderPinterest();
}

function onSearch() {
  console.log("1");
}

function onSelect() {
  console.log("2");
}

function onCard() {
  console.log("3");
}

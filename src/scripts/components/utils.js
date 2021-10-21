import { initMasonry } from "./masonry.js";
import { createMessageWindow, createElement } from "./templates.js";

function deleteCard(cardId) {
  const card = document.getElementById(cardId);
  card.remove();
  initMasonry();
}

function sortCard(posts, input) {
  return posts.filter((post) => {
    let intersect = post.description
      .toLowerCase()
      .split("#")
      .filter((value) =>
        input
          .toLowerCase()
          .split("#")
          .filter((e) => e !== "")
          .includes(value)
      );
    return intersect.length;
  });
}

function showMessage(text) {
  const message = createMessageWindow(text);
  document.body.append(message);
  setTimeout(() => {
    message.remove();
  }, 1300);
}

function showPreloader() {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("hide-preloader");
  setTimeout(() => {
    preloader.remove();
  }, 1300);
}

function renderPreloader() {
  const preloader = createElement("div");
  preloader.id = "preloader";
  const preloaderGif = createElement("img");
  preloaderGif.setAttribute("alt", "preloader");
  preloaderGif.src = "Preloader-Gif.gif";
  preloader.append(preloaderGif);
  const main = document.getElementById("main");
  main.append(preloader);
  showPreloader();
}

function renderContainer(input) {
  const nothingFound = document.createElement("h2");
  const container = document.querySelector(".container");
  const massText = [
    "По проще что-нибудь поищи",
    `Я бездушная машина,я не знаю, что такое ${input}!!!`,
    "Интересный запрос,но увы, для тебя ничего нет",
    "Поищи в Google",
    "На нашем христианском сервере ничего не найдено!!!",
    `Будь я поумнее, я бы нашел тебе ${input}((`,
  ];
  const randomText = massText[Math.floor(Math.random() * 6)];
  nothingFound.innerText = randomText;
  container.append(nothingFound);
}

export {
  deleteCard,
  sortCard,
  renderContainer,
  showMessage,
  showPreloader,
  renderPreloader,
};

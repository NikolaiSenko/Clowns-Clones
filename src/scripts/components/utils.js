import { initMasonry } from "./masonry.js";
import { createMessageWindow } from "./templates.js";

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

function showMessage(text){
  const message = createMessageWindow(text);
  document.body.append(message);
  setTimeout(() => {
    message.remove();
  }, 1300);
}

function renderContainer() {
  const nothingFound = document.createElement("h2");
  const container = document.querySelector(".container");
  nothingFound.innerText = "На нашем христианском сервере,ничего не найдено!!!";
  container.append(nothingFound);
}

export { deleteCard, sortCard, renderContainer, showMessage };

const container = document.body.children[1].children[0];
function getTodos() {
  fetch("https://615bec4fc298130017735e20.mockapi.io/posts")
    .then((response) => response.json())
    .then((response) => {
      response.forEach((post) => createCard(post));
    });
}
getTodos();

function createElement(tag, className, text = "") {
  const element = document.createElement(tag);
  const textNode = document.createTextNode(text);
  element.className = className;
  element.append(textNode);
  return element;
}

function createCard({ Image, avatar, Description, id } = post) {
  console.log(Image, avatar, Description, id);
  let card = createElement("div", "card");
  card.id = `${id}`;
  let cardHeader = createElement("div", "card__header");
  let imgMain = createElement("img", "card__pictures");
  imgMain.setAttribute("src", `${Image}`);
  imgMain.setAttribute("crossorigin", "");
  let buttonCardTop = createElement("button", "card__button--top", "Сохранить");
  let buttonCardBottom = createElement("button", "card__button--bottom", "...");
  let cardFooter = createElement("div", "card__footer");
  let imgAvatars = createElement("img", "card__avatars");
  imgAvatars.setAttribute("src", `${avatar}`);
  let descriptions = createElement("p", "card__descriptions", `${Description}`);
  cardHeader.append(imgMain, buttonCardTop, buttonCardBottom);
  cardFooter.append(imgAvatars, descriptions);
  card.append(cardHeader, cardFooter);
  console.log(card);
  container.append(card);
  getStyle(card);
}
function getStyle() {
  let containers = document.querySelector(".container");
  const masonry = new Masonry(containers, {
    gutter: 10,
    itemSelector: ".card",
    fitWidth: true,
  });
  document.onload = () => masonry.layout();
}

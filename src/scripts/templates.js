function createElement(tag, className, text = "") {
  const element = document.createElement(tag);
  const textNode = document.createTextNode(text);
  element.className = className;
  element.append(textNode);
  return element;
}

function createCard({ Image, avatar, Description, id } = post) {
  let card = createElement("div", "card");
  card.id = `${id}`;
  let cardHeader = createElement("div", "card__header");
  let imgMain = createElement("img", "card__pictures");
  imgMain.setAttribute("src", `${Image}`);
  let buttonCardTop = createElement("button", "card__button--top", "Сохранить");
  let buttonCardBottom = createElement("button", "card__button--bottom", "...");
  let cardFooter = createElement("div", "card__footer");
  let imgAvatars = createElement("img", "card__avatars");
  imgAvatars.setAttribute("src", `${avatar}`);
  let descriptions = createElement("p", "card__descriptions", `${Description}`);
  cardHeader.append(imgMain, buttonCardTop, buttonCardBottom);
  cardFooter.append(imgAvatars, descriptions);
  card.append(cardHeader, cardFooter);
  return card;
}

export { createCard };

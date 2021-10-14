function getCards(additionalMethod) {
  return fetch("https://615bec4fc298130017735e20.mockapi.io/posts")
    .then((response) => response.json())
    .then((cards) => cards.sort(() => Math.random() - 0.5))
    .then((randomCards) => additionalMethod(randomCards));
}

export { getCards };

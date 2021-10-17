import { initMasonry } from "./masonry.js";

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

export { deleteCard, sortCard };

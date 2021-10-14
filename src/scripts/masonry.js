import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

function initMasonry() {
  const container = document.querySelector(".container");
  imagesLoaded(container, () => {
    const masonry = new Masonry(container, {
      gutter: 10,
      itemSelector: ".card",
      fitWidth: true,
    });
  });
}

export { initMasonry };

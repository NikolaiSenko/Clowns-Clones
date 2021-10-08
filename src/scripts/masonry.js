function getMasonry() {
  imagesLoaded(document.querySelector(".container"), () => {
    let container = document.querySelector(".container");
    const masonry = new Masonry(container, {
      gutter: 10,
      itemSelector: ".card",
      fitWidth: true,
    });
  });
}

export { getMasonry };

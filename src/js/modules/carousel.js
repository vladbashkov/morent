const carousel = () => {
  const carouselsArr = document.querySelectorAll(".carousel-small"),
    previewCarouse = document.querySelector(".preview-carousel");

  const removeActive = () => {
    carouselsArr.forEach((elem) => {
      elem.classList.remove("carousel-active", "p-2");
    });
  };

  const createNewPreview = (src) => {
    let img = document.createElement("img");
    img.classList.add("preview-carousel_img", "faded");
    img.src = src;
    previewCarouse.append(img);
  };

  carouselsArr.forEach((elem, i) => {
    if (i === 0) {
      elem.classList.add("carousel-active", "p-2");
    }

    elem.addEventListener("click", (e) => {
      const target = e.target;

      if (!target.classList.contains("carousel-active")) {
        let previewCarouselIMG = document.querySelector(
          ".preview-carousel_img"
        );
        previewCarouselIMG.remove();

        removeActive();

        target.classList.add("carousel-active", "p-2");
        createNewPreview(target.src);
      }
    });
  });
};

export default carousel;

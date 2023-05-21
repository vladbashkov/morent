const favBtn = () => {
  const buttonsArr = document.querySelectorAll(".fav-btn_container");

  buttonsArr.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      const imgsArr = document.querySelectorAll(".fav-btn");
      const target = e.target;

      if (
        (target || target === imgsArr[i]) &&
        !imgsArr[i].src.includes("img/red-heart.svg")
      ) {
        imgsArr[i].src = "img/red-heart.svg";
      } else {
        imgsArr[i].src = "img/empt-heart.svg";
      }
    });
  });
};

export default favBtn;

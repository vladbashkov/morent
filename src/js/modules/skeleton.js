const skeleton = (additional = false) => {
  const allSkeletons = document.querySelectorAll(".skeleton");

  if (additional) {
    allSkeletons.forEach((item) => {
      item.classList.remove("skeleton");
    });
  } else {
    window.addEventListener("load", function () {
      allSkeletons.forEach((item) => {
        item.classList.remove("skeleton");
      });
    });
  }
};

export default skeleton;

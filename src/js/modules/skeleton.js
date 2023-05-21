const skeleton = () => {
  const allSkeletons = document.querySelectorAll(".skeleton");

  window.addEventListener("load", function () {
    allSkeletons.forEach((item) => {
      item.classList.remove("skeleton");
    });
  });
};

export default skeleton;

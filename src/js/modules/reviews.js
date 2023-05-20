const reviewsArr = [
  {
    name: "Alex Stanton",
    position: "CEO at Bukalapak",
    date: "21 July 2022",
    rating: 4,
    comment:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    name: "Skylar Dias",
    position: "CEO at Amazon",
    date: "220 July 2022",
    rating: 4,
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    name: "Alex Dias",
    position: "CEO at Bukalzon",
    date: "20 July 2022",
    rating: 5,
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    name: "Skylar Stanton",
    position: "CEO at Amalapak",
    date: "20 July 2022",
    rating: 3,
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    name: "Alex Stanton",
    position: "CEO at Bukalapak",
    date: "21 July 2022",
    rating: 4,
    comment:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    name: "Skylar Dias",
    position: "CEO at Amazon",
    date: "22 July 2022",
    rating: 4,
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    name: "Alex Dias",
    position: "CEO at Bukalzon",
    date: "20 July 2022",
    rating: 5,
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    name: "Skylar Stanton",
    position: "CEO at Amalapak",
    date: "20 July 2022",
    rating: 3,
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    name: "Alex Stanton",
    position: "CEO at Bukalapak",
    date: "21 July 2022",
    rating: 4,
    comment:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    name: "Skylar Dias",
    position: "CEO at Amazon",
    date: "22 July 2022",
    rating: 4,
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    name: "Alex Dias",
    position: "CEO at Bukalzon",
    date: "20 July 2022",
    rating: 5,
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    name: "Skylar Stanton",
    position: "CEO at Amalapak",
    date: "20 July 2022",
    rating: 3,
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    name: "Alex Dias",
    position: "CEO at Bukalzon",
    date: "20 July 2022",
    rating: 5,
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
];

const reviews = () => {
  const reviewsList = document.querySelector(".reviews-list"),
    showList = document.querySelector("#showList"),
    showText = document.querySelector(".show-text"),
    arrow = document.querySelector(".arrow");

  const getRatings = (rating) => {
    let ratingArr = [];

    for (let index = 0; index < rating; index++) {
      ratingArr.push(`<img
                        src="img/star.svg"
                        alt="Star Icon"
                        class="review-star mr-1"
                      />`);
    }

    if (rating < 6) {
      for (let index = 0; index < 5 - rating; index++) {
        ratingArr.push(`<img
                          src="img/star-empt.svg"
                          alt="Star Icon"
                          class="review-star mr-1"
                        />`);
      }
    }
    return `<div class="review-rating">
              ${ratingArr.join("")}
            </div>`;
  };

  const renderList = (l = 2) => {
    let reviews = reviewsArr
      .map((elem, i) => {
        if (i >= l) {
          return;
        }
        return `<div class="review-card d-flex faded">
                  <img
                    src="${
                      i % 2 ? "img/account-pic_w.png" : "img/account-pic.png"
                    }"
                    alt="Account Picture"
                    class="account-pic mr-3"
                  />
                  <div class="review-content w-100">
                    <div class="review-row d-flex justify-content-between mb-3">
                      <div class="reviews-title">${elem.name}</div>
                      <div class="review-date">${elem.date}</div>
                    </div>
                    <div class="review-row d-flex justify-content-between mb-3">
                      <div class="review-position">${elem.position}</div>
                      ${getRatings(elem.rating)}
                    </div>
                    <div class="review-row">
                      <p class="review-comment">
                        ${elem.comment}
                      </p>
                    </div>
                  </div>
                </div>`;
      })
      .join("");

    return reviews;
  };

  reviewsList.innerHTML = renderList();

  showList.addEventListener("click", () => {
    if (reviewsList.classList.contains("show-active")) {
      reviewsList.classList.remove("show-active");
      reviewsList.innerHTML = renderList(2);
      showText.innerText = "Show All";
      arrow.style.transform = "rotate(0deg)";
    } else {
      reviewsList.classList.add("show-active");
      reviewsList.innerHTML = renderList(reviewsArr.length);
      showText.innerText = "Show Less";
      arrow.style.transform = "rotate(180deg)";
    }
  });
};

export default reviews;

const viewCars = (listSelector, buttonSelector, data) => {
  const list = document.querySelector(listSelector),
    button = document.querySelector(buttonSelector);

  const renderList = (l = 3) => {
    let rendered = data
      .map((elem, i) => {
        if (i >= l) {
          return;
        }
        return `<div class="car-card card mb-4 col p-3 ${listSelector.replace(
          "#",
          ""
        )} faded">
                  <div class="car-card_header d-flex">
                    <div>
                      <div class="car-title">${elem.title}</div>
                      <div class="car-type">${elem.type}</div>
                    </div>
                    <div class="fav-btn_container col d-flex justify-content-end">
                      <img src="img/${
                        elem.fav ? "red-heart.svg" : "empt-heart.svg"
                      }" alt="Heart Icon" class="fav-btn" />
                    </div>
                  </div>
                  <div class="car-card_image my-5">
                    <img src="img/${elem.title
                      .toLowerCase()
                      .replaceAll(
                        " ",
                        ""
                      )}.png" class="car-image" alt="Car picture" />
                  </div>
                  <div class="car-card_specification my-3 d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                      <img src="img/gas-station.svg" alt="Gas Station Icon" />
                      <p class="card_specification-text">${elem.fuel}</p>
                    </div>
                    <div class="d-flex align-items-center">
                      <img src="img/transmission.svg" alt="Transmission Icon" />
                      <p class="card_specification-text">${
                        elem.transmission
                      }</p>
                    </div>
                    <div class="d-flex align-items-center">
                      <img src="img/pass.svg" alt="Passengers Icon" />
                      <p class="card_specification-text">${elem.capacity}</p>
                    </div>
                  </div>
                  <div class="pricing-container mt-3 d-flex justify-content-between">
                    <div class="prices">
                      <div class="d-flex align-items-center">
                        <h3 class="pricing">$${elem.price}/</h3>
                        <span class="per-day">days</span>
                      </div>
                      
                      ${
                        elem.discount
                          ? `<p class="discount">$${elem.discount}</p>`
                          : ""
                      }
                    </div>
                    <div class="d-flex justify-content-end">
                      <button type="button" class="rent btn btn-primary px-5">
                        Rent Now
                      </button>
                    </div>
                  </div>
                </div>`;
      })
      .join("");
    return rendered;
  };

  list.innerHTML = renderList();

  button.addEventListener("click", () => {
    if (list.classList.contains("show-active")) {
      list.classList.remove("show-active");
      list.innerHTML = renderList();
      button.innerText = "View All";
    } else {
      list.classList.add("show-active");
      list.innerHTML = renderList(data.length);
      button.innerText = "View Less";
    }
  });
};

export default viewCars;

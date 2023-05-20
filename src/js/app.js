import * as flsFunctions from "./modules/functions.js";
import carousel from "./modules/carousel.js";
import reviews from "./modules/reviews.js";
import viewCars from "./modules/viewCars.js";

// Cars data
import recentCars from "./data/recentCars.js";
import recommendationCars from "./data/recommendationCars.js";

window.addEventListener("DOMContentLoaded", () => {
  flsFunctions.isWebp();
  carousel();
  reviews();
  viewCars("#recentList", "#recentView", recentCars);
  viewCars("#recommendationList", "#recommendationView", recommendationCars);
});

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

import * as flsFunctions from "./modules/functions.js";
import { Splide } from "@splidejs/splide";

import IMask from "imask";
import fslightbox from "fslightbox";

flsFunctions.isWebp();
// flsFunctions.mainOffset();

const dropdownLink = document.querySelector(".link--dropdown");
dropdownLink.addEventListener("click", () => {
  dropdownLink.classList.toggle("active");
  dropdownLink.setAttribute(
    "aria-expanded",
    dropdownLink.classList.contains("active") ? "true" : "false"
  );
});

const dropdownMobLink = document.querySelector(".mob-menu__link--drop");
dropdownMobLink.addEventListener("click", () => {
  dropdownMobLink.classList.toggle("active");
  dropdownMobLink.setAttribute(
    "aria-expanded",
    dropdownMobLink.classList.contains("active") ? "true" : "false"
  );
});

const burgerBtn = document.querySelector(".menu-trigger");
const menu = document.querySelector(".mob-menu");
const burgerBack = document.querySelector(".header-mob__burger");
burgerBtn.addEventListener("click", (e) => {
  burgerBtn.classList.toggle("menu-trigger--is-open");
  menu.classList.toggle("mob-menu--is-open");
  burgerBack.classList.toggle("header-mob__burger--active");
  document.body.classList.toggle("locked");

  menu.addEventListener("click", (e) => {
    console.log(e.target);
    if (
      e.target == menu ||
      e.target.classList.contains("mob-menu__link") ||
      e.target.classList.contains("mob-submenu__link")
    ) {
      burgerBtn.classList.remove("menu-trigger--is-open");
      menu.classList.remove("mob-menu--is-open");
      burgerBack.classList.remove("header-mob__burger--active");
      document.body.classList.remove("locked");
    }
  });
});

//banner-slider
document.addEventListener("DOMContentLoaded", function () {
  const bannerSlider = new Splide(".banner-slider__slider", {
    type: "loop",
    arrows: true,
    pagination: false,
    perPage: 1,
    autoplay: true,
    interval: 5000,
    speed: 1100,
    classes: {
      arrows: "splide__arrows banner-slider__arrows",
      arrow: "splide__arrow banner-slider__arrow slider-main-arrow",
      prev: "splide__arrow--prev banner-slider__arrow--prev",
      next: "splide__arrow--next banner-slider__arrow--next",
    },
  });
  bannerSlider.mount();
});

//team-slider
document.addEventListener("DOMContentLoaded", function () {
  const teamSlider = new Splide(".team__slider", {
    type: "loop",
    arrows: true,
    pagination: false,
    autoWidth: true,
    start: 1,
    perPage: 3,
    perMove: 1,
    clones: 0,
    focus: "center",
    gap: "var(--gap)",
    classes: {
      arrows: "splide__arrows team__arrows",
      arrow: "splide__arrow team-slider__arrow slider-main-arrow",
      prev: "splide__arrow--prev team__arrow--prev",
      next: "splide__arrow--next team__arrow--next",
      pagination: "splide__pagination slider-main__pagination",
      page: "splide__pagination__page slider-main__page",
    },
    breakpoints: {
      1199: {
        autoWidth: false,
        arrows: false,
        pagination: true,
        start: 0,
        focus: "left",
      },
      767: {
        perPage: 2,
      },
      478: {
        perPage: 1,
      },
    },
  });
  teamSlider.mount();
});

//news-slider
document.addEventListener("DOMContentLoaded", function () {
  const newsSlider = new Splide(".news-slider__slider", {
    type: "loop",
    arrows: true,
    pagination: false,
    perPage: 3,
    perMove: 1,
    gap: "var(--gap)",
    classes: {
      arrows: "splide__arrows news-slider__arrows",
      arrow: "splide__arrow news-slider-slider__arrow slider-secondary-arrow",
      prev: "splide__arrow--prev news-slider__arrow--prev",
      next: "splide__arrow--next news-slider__arrow--next",
      pagination: "splide__pagination slider-main__pagination",
      page: "splide__pagination__page slider-main__page",
    },
    breakpoints: {
      999: {
        arrows: false,
        pagination: true,
        perPage: 1,
      },
    },
  });
  newsSlider.mount();
});

const elements = document.querySelectorAll(".form__input--tel");
const maskOptions = {
  mask: "+{7} (000) 000-00-00",
};
elements.forEach((element) => {
  const mask = IMask(element, maskOptions);
});

document.querySelector(".current-year").innerHTML = new Date().getFullYear();

//modal
const modalOpen = document.querySelector(".modal-open");
const modalOverlay = document.querySelector(".modal__overlay");
const modal = document.querySelector(".modal__wrapper");

modalOpen.addEventListener("click", function () {
  modalOverlay.classList.add("modal__overlay--visible");
  modal.style.display = "flex";
  document.body.classList.add("locked");
});

modalOverlay.addEventListener("click", function (e) {
  if (e.target !== modal) {
    modalOverlay.classList.remove("modal__overlay--visible");
    modal.style.display = "none";
    document.body.classList.remove("locked");
  }
});

// scroll to top
// if (document.querySelector(".scroll-to-top") != null) {
//   const scrollBtn = document.querySelector(".scroll-to-top");
//   window.addEventListener("scroll", () => {
//     if (window.pageYOffset > 200) {
//       scrollBtn.style.visibility = "visible";
//       scrollBtn.style.opacity = "1";
//     } else {
//       scrollBtn.style.visibility = "hidden";
//       scrollBtn.style.opacity = "0";
//     }
//   });
//   scrollBtn.addEventListener("click", () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   });
// }

// if (document.querySelector(".tabs") != null) {
//   flsFunctions.tabs("tabs__btn", "tabs__item", "active");
// }

flsFunctions.accordion();

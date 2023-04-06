// Services Accordion
const accordions = document.querySelectorAll(".services__accordion");
const initOpen = document
  .querySelector(".services__accordion--open")
  .querySelector(".services__accordion-content");
const bgHeight = document.querySelector(".services__bg-item");

initOpen.style.maxHeight = `${initOpen.scrollHeight}px`;
bgHeight.style.height = `${initOpen.scrollHeight}px`;

accordions.forEach(el => {
  el.addEventListener("click", e => {
    const self = e.currentTarget;
    const btn = self.querySelector(".services__accordion-btn");
    const content = self.querySelector(".services__accordion-content");

    if (self.classList.contains("services__accordion--open")) return;

    accordions.forEach(item => {
      item.classList.remove("services__accordion--open");
      item.querySelector(".services__accordion-content").style.maxHeight = null;
    });

    self.classList.add("services__accordion--open");
    content.style.maxHeight = `${content.scrollHeight}px`;
    bgHeight.style.height = `${content.scrollHeight}px`;
  });
});

// Turnkey solutions slider
const turnkeySolutionsSlider = new Swiper(".turnkey-solutions__slider", {
  slidesPerView: 4,
  spaceBetween: 20,

  navigation: {
    nextEl: ".turnkey-solutions__slider-arrow--next",
    prevEl: ".turnkey-solutions__slider-arrow--prev",
  },
});

// Cases slider
const casesSlider = new Swiper(".cases__slider", {
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    nextEl: ".cases__slider-arrow--next",
    prevEl: ".cases__slider-arrow--prev",
  },

  pagination: {
    el: ".cases__slider-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  },
});

// Reviews Slider
const reviewsSlider = new Swiper(".reviews__slider", {
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    nextEl: ".reviews__slider-arrow--next",
    prevEl: ".reviews__slider-arrow--prev",
  },
});

// Articles Slider
const articlesSlider = new Swiper(".articles__slider", {
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    nextEl: ".articles__slider-arrow--next",
    prevEl: ".articles__slider-arrow--prev",
  },
  pagination: {
    el: ".articles__slider-pagination",
    clickable: true,
    renderBullet: function (index, className, ar) {
      console.log(ar);
      return `<span class="${className}">${index + 1}</span>`;
    },
  },
});

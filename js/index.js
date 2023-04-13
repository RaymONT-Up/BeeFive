// FancyBox Init
Fancybox.bind('[data-fancybox="gallery"]', {});
Fancybox.bind("[data-fancybox='reviews-gallery']", {});

// Header dropdown
const headerDropdownBtn = document.querySelector(".header__dropdown-btn");
const headerDropdownList = document.querySelector(".header__list");
headerDropdownBtn.addEventListener("click", () => {
  if (headerDropdownBtn.classList.contains("header__dropdown--active")) {
    headerDropdownBtn.classList.remove("header__dropdown--active");
    headerDropdownList.classList.remove("header__dropdown--active");
  } else {
    headerDropdownBtn.classList.add("header__dropdown--active");
    headerDropdownList.classList.add("header__dropdown--active");
  }
});

// Hero slider
const swiper = new Swiper(".hero__slider", {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  simulateTouch: false,

  autoplay: {
    delay: 2000,

    stopOnLastSlide: false,

    disableOnInteraction: false,
  },
});

// Services tabs
document.addEventListener("DOMContentLoaded", e => {
  console.log(e);
  const servicesTabs = () => {
    const tabControlersList = document.querySelectorAll(".services__tab-btn");
    const tabContentList = document.querySelectorAll(".services__tab-content");
    let tabName;
    const initTab = document.querySelector(
      ".services__tab-content.services__tab--active"
    );

    initTab.style.maxHeight = `${initTab.scrollHeight + 30}px`;

    tabControlersList.forEach(item => {
      item.addEventListener("click", e => {
        tabControlersList.forEach(i => {
          i.classList.remove("services__tab--active");
        });
        e.target.classList.add("services__tab--active");

        tabName = e.target.getAttribute("data-tab-name");
        tabContentChange(tabName);
      });
    });

    const tabContentChange = tabName => {
      tabContentList.forEach(i => {
        i.classList.remove("services__tab--active");
        i.style.maxHeight = `0px`;
      });
      tabContentList[+tabName - 1].classList.add("services__tab--active");
      tabContentList[+tabName - 1].style.maxHeight = `${
        tabContentList[+tabName - 1].scrollHeight
      }px`;
    };
  };
  servicesTabs();
});

// Services accordion for mobile
const servicesAccordion = () => {
  const accordions = document.querySelectorAll(".services__accordion");
  const initOpen = document
    .querySelector(".services__accordion--open")
    .querySelector(".services__accordion-content");

  setTimeout(() => {
    initOpen.style.maxHeight = `${initOpen.scrollHeight}px`;
  }, 1000);

  accordions.forEach(el => {
    el.addEventListener("click", e => {
      const self = e.currentTarget;
      const btn = self.querySelector(".services__accordion-btn");
      const content = self.querySelector(".services__accordion-content");

      if (self.classList.contains("services__accordion--open")) return;

      accordions.forEach(item => {
        item.classList.remove("services__accordion--open");
        item.querySelector(".services__accordion-content").style.maxHeight =
          null;
      });

      self.classList.add("services__accordion--open");
      content.style.maxHeight = `${content.scrollHeight}px`;
    });
  });
};
servicesAccordion();

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
  spaceBetween: 76.5,

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
  slidesPerView: "auto",
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
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
    // renderCustom: function (swiper, current, total) {
    //   let paginationHtml = "";
    //   const maxVisible = 3; // максимальное количество видимых элементов

    //   // добавляем первый элемент
    //   paginationHtml +=
    //     '<span class="swiper-pagination-bullet">' + 1 + "</span>";

    //   // добавляем обрезанные числа, если их нужно показать
    //   if (total > maxVisible) {
    //     const start = current - 1;
    //     const end = current + 1;
    //     if (current < 2) {
    //       end += 2 - current;
    //     } else if (current > total - 2) {
    //       start -= current - (total - 3);
    //     }
    //     if (start > 1) {
    //       paginationHtml += '<span class="swiper-pagination-bullet">..</span>';
    //     }
    //     for (let i = start; i <= end; i++) {
    //       if (i > 1 && i < total) {
    //         paginationHtml +=
    //           '<span class="swiper-pagination-bullet">' + i + "</span>";
    //       }
    //     }
    //     if (end < total) {
    //       paginationHtml += '<span class="swiper-pagination-bullet">..</span>';
    //     }
    //   } else {
    //     // добавляем остальные элементы
    //     for (let i = 2; i <= total - 1; i++) {
    //       paginationHtml +=
    //         '<span class="swiper-pagination-bullet">' + i + "</span>";
    //     }
    //   }

    //   // добавляем последний элемент
    //   paginationHtml +=
    //     '<span class="swiper-pagination-bullet">' + total + "</span>";

    //   return paginationHtml;
    // },
  },
});

// Rating stars
const ratingItemsList = document.querySelectorAll(".popup-feedback__star");
ratingItemsList.forEach(star => {
  star.addEventListener("click", e => {
    console.log(
      star.parentNode.dataset.reviewTotalValue,
      star.dataset.reviewItemValue
    );
    star.parentNode.dataset.reviewTotalValue = star.dataset.reviewItemValue;
  });
});

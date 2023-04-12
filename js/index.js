// Services tabs
document.addEventListener("DOMContentLoaded", () => {});
const servicesTabs = () => {
  const tabControlersList = document.querySelectorAll(".services__tab-btn");
  const tabContentList = document.querySelectorAll(".services__tab-content");
  let tabName;
  const initTab = document.querySelector(
    ".services__tab-content.services__tab--active"
  );

  initTab.style.maxHeight = initTab.style.maxHeight = `325px`;

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
/* const accordions = document.querySelectorAll(".services__accordion");
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

    document.querySelector("services__list-content-desktop").append();
  });
});*/

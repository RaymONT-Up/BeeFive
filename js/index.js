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

// Services tabs || accordion for mobile
if (window.innerWidth > 1000) {
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
} else {
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
}

// Turnkey solutions slider
const turnkeySolutionsSlider = new Swiper(".turnkey-solutions__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".turnkey-solutions__slider-arrow--next",
    prevEl: ".turnkey-solutions__slider-arrow--prev",
  },

  pagination: {
    el: ".turnkey-solutions__slider-pagination",
    type: "fraction",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    461: {
      slidesPerView: 1.5,
    },
    600: {
      slidesPerView: 2,
    },

    900: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 4,
    },
  },
});

// Cases slider
const casesSlider = new Swiper(".cases__slider", {
  slidesPerView: 3,

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

  breakpoints: {
    0: {
      slidesPerView: 1,
      pagination: {
        el: ".cases__slider-pagination",
        type: "fraction",
      },
      spaceBetween: 10,
    },
    460: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    550: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 1.5,

      spaceBetween: 50,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 76,
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
  breakpoints: {
    0: {
      centeredSlides: true,
    },
    1000: {
      centeredSlides: false,
    },
  },
});

// About company tabs
if (window.innerWidth < 1000) {
  const tabControlersList = document.querySelectorAll(
    ".about-company__tab-btn"
  );
  const tabContentList = document.querySelectorAll(
    ".about-company__tab-content"
  );
  let tabName;
  const initTab = document.querySelector(
    ".about-company__tab-content.about-company__tab--active"
  );

  tabControlersList.forEach(item => {
    item.addEventListener("click", e => {
      tabControlersList.forEach(i => {
        i.classList.remove("about-company__tab--active");
      });
      e.target.classList.add("about-company__tab--active");

      tabName = e.target.getAttribute("company-tab-index");

      tabContentChange(tabName);
    });
  });

  const tabContentChange = tabName => {
    tabContentList.forEach(i => {
      i.classList.remove("about-company__tab--active");
    });

    tabContentList[+tabName - 1].classList.add("about-company__tab--active");
    if (+tabName === 2) {
      document
        .querySelector(".advantages")
        .classList.add("about-company__tab--active");
      document
        .querySelector(".work-process")
        .classList.add("about-company__tab--active");

      // Для того чтобы анимация работала удаляю класс анимации, который появлся сразу из-за того что элементы были скрыты с помощью dispay none
      const advantagesItems = document.querySelectorAll(".advantages__item");
      advantagesItems.forEach(i => {
        i.classList.remove("aos-animate");
      });

      const workProcessItems = document.querySelectorAll(".work-process__item");
      workProcessItems.forEach(i => {
        i.classList.remove("aos-animate");
      });

      AOS.refresh();
    }
  };
}
// ARTICLES SLDIER
const articlesSlider = new Swiper(".articles__slider", {
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    nextEl: ".articles__slider-arrow--next",
    prevEl: ".articles__slider-arrow--prev",
  },

  pagination: {
    el: ".articles__slider-pagination",
    type: "custom",

    renderCustom: function (swiper, current, total) {
      let bullets = [];

      if (current === 1) {
        bullets = [1, Math.floor(total / 2), total];
      } else if (current === total) {
        bullets = [1, Math.floor(total / 2), total];
      } else if (current > 1 && current < total) {
        bullets = [1, current, total];
      }
      let html = "";
      bullets.forEach((bullet, index, array) => {
        html +=
          '<span class="swiper-pagination-bullet articles__pagination-item articles__pagination-item--num';
        if (current === bullet) {
          html += " swiper-pagination-bullet-active";
        }

        html += '" data-index="' + bullet + '">' + bullet + "</span>";
      });
      ``;
      return html;
    },
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      pagination: {
        el: ".articles__slider-pagination",
        type: "fraction",
      },
    },
    460: {
      slidesPerView: 1.5,

      pagination: {
        el: ".articles__slider-pagination",
        type: "fraction",
      },
    },

    800: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
    },
  },
});

const bullets = document.querySelectorAll(".articles__pagination-item--num");
const bulletsContainer = document.querySelector(".articles__slider-pagination");

bulletsContainer.addEventListener("click", onBulletClick);
function onBulletClick(event) {
  if (event.target.classList.contains("articles__pagination-item--num")) {
    const slideIndex = parseInt(event.target.dataset.index, 10);

    // вызываем метод slideTo для переключения на нужный слайд
    articlesSlider.slideTo(slideIndex - 1);

    // обновляем состояние активного слайда
    articlesSlider.updateActiveIndex(slideIndex - 1);
  }
}

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

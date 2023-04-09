const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");

let unlock = true;
const timeout = 700;

if (popupLinks.length > 0) {
  popupLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const popupName = link.getAttribute("href").replace("#", "");
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
    });
  });
}

const popupCloseBtn = document.querySelectorAll(".popup-close");
if (popupCloseBtn.length > 0) {
  popupCloseBtn.forEach(closeBtn => {
    closeBtn.addEventListener("click", e => {
      e.preventDefault();
      popupClose(closeBtn.closest(".popup"));
    });
  });
}

const popupOpen = currentPopup => {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector(".popup.popup--open");

    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }

    currentPopup.classList.add("popup--open");
    currentPopup.addEventListener("click", e => {
      if (!e.target.closest(".popup__content"))
        popupClose(e.target.closest(".popup"));
    });
  }
};
const popupClose = (popupActive, doUnlock = true) => {
  if (unlock) {
    popupActive.classList.remove("popup--open");
    if (doUnlock) bodyUnLock();
  }
};

const bodyLock = () => {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

  body.style.paddingRight = lockPaddingValue;
  body.classList.add("body-lock");

  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeout);
};
const bodyUnLock = () => {
  unlock = false;
  setTimeout(() => {
    unlock = true;
    body.style.paddingRight = 0;
    body.classList.remove("body-lock");
  }, timeout);
};

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    const popupActive = document.querySelector(".popup.popup--open");
    popupClose(popupActive);
  }
});

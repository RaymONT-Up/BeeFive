// Accordion
const servicesAccordion = () => {
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
        item.querySelector(".services__accordion-content").style.maxHeight =
          null;
      });

      self.classList.add("services__accordion--open");
      content.style.maxHeight = `${content.scrollHeight}px`;
      bgHeight.style.height = `${content.scrollHeight}px`;
    });
  });
};
servicesAccordion();

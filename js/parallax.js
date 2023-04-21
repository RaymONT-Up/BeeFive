const parallaxContainer = document.querySelector(".gallery");
const parallaxItems = document.querySelectorAll(".gallery__item");
const parallaxItemsImage = document.querySelectorAll(".gallery__item-image");

// Кф - чем меньше тем больше будет паралакс
// const coefficient = 20;
// const speed = 0.1;

// let posX = 0,
//   posY = 0;
// let coordXprocent = 0,
//   coordYprocent = 0;

// function setMouseParallaxStyle() {
//   const distX = coordXprocent - posX;
//   const distY = coordYprocent - posY;

//   posX = posX + distX * speed;
//   posY = posY + distY * speed;

//   parallaxItemsImage.forEach(item => {
//     item.style.cssText = `transform: translate(${posX / coefficient}%, ${
//       posY / coefficient
//     }%)`;
//   });

//   requestAnimationFrame(setMouseParallaxStyle);
// }
// setMouseParallaxStyle();

// parallaxContainer.addEventListener("mousemove", e => {
//   const parallaxWidth = parallaxContainer.offsetWidth;
//   const parallaxHeight = parallaxContainer.offsetHeight;

//   const coordX = e.pageX - parallaxWidth / 2;
//   const coordY = e.pageY - parallaxHeight / 2;

//   coordXprocent = (coordX / parallaxWidth) * 100;
//   coordYprocent = (coordY / parallaxHeight) * 100;
// });

// // Паралакс при скроле
if (document.documentElement.clientWidth > 768) {
  let thresholdSets = [];
  for (let i = 0; i <= 1.0; i += 0.005) {
    thresholdSets.push(i);
  }
  const callback = (entries, observer) => {
    const scrollTopProcent =
      (window.pageYOffset / parallaxContainer.offsetHeight) * 100;
    setParallaxItemsStyle(scrollTopProcent);
  };
  
  
  const setParallaxItemsStyle = scrollTopProcent => {
    parallaxItemsImage[0].style.cssText = `transform: translate(0, ${
      scrollTopProcent / 30
    }%)`;
    parallaxItemsImage[1].style.cssText = `transform: translate(0, ${
      scrollTopProcent / 14
    }%)`;
    parallaxItemsImage[2].style.cssText = `transform: translate(0, ${
      scrollTopProcent / 30
    }%)`;
    parallaxItemsImage[3].style.cssText = `transform: translate(0, ${
      scrollTopProcent / 18
    }%)`;
    parallaxItemsImage[4].style.cssText = `transform: translate(0, ${
      scrollTopProcent / 30
    }%)`;
    parallaxItemsImage[5].style.cssText = `transform: translate(0,${
      scrollTopProcent / 40
    }%)`;
    parallaxItemsImage[6].style.cssText = `transform: translate(0, ${
      scrollTopProcent / 25
    }%)`;
  };
  
  const observer = new IntersectionObserver(callback, {
    threshold: thresholdSets,
  });
  observer.observe(document.querySelector(".gallery"));
  
}

if (document.documentElement.clientWidth <= 768) {
  let thresholdSets = [];
  for (let i = 0; i <= 1.0; i += 0.005) {
    thresholdSets.push(i);
  }
  const callback = (entries, observer) => {
    const scrollTopProcent =
      (window.pageYOffset / parallaxContainer.offsetHeight) * 100;
    setParallaxItemsStyle(scrollTopProcent);
  };
  
  
  const setParallaxItemsStyle = scrollTopProcent => {
    parallaxItemsImage[0].style.cssText = `transform: translate(0, ${
      scrollTopProcent / 60
    }%)`;
    parallaxItemsImage[1].style.cssText = `transform: translate(0, ${
      scrollTopProcent / 40
    }%)`;
    parallaxItemsImage[2].style.cssText = `transform: translate(0, ${
      scrollTopProcent / 40
    }%)`;
    parallaxItemsImage[3].style.cssText = `transform: translate(0, ${
      scrollTopProcent / 36
    }%)`;
    parallaxItemsImage[4].style.cssText = `transform: translate(0, ${
      scrollTopProcent / 60
    }%)`;
    parallaxItemsImage[5].style.cssText = `transform: translate(0,${
      scrollTopProcent / 80
    }%)`;
    parallaxItemsImage[6].style.cssText = `transform: translate(0, ${
      scrollTopProcent / 30
    }%)`;
  };
  
  const observer = new IntersectionObserver(callback, {
    threshold: thresholdSets,
  });
  observer.observe(document.querySelector(".gallery"));
  
}
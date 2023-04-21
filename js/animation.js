
function ready (){
// AOS
AOS.init({
  offset: 10,
  delay: 250, // values from 0 to 3000, with step 50ms
  duration: 1250, // values from 0 to 3000, with step 50ms
  once: true, // whether animation should happen only once - while scrolling down
});
}

document.addEventListener("DOMContentLoaded", ready);

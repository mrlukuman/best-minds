const overlay = document.querySelector(".overlay");
const hamburger = document.querySelector(".hamburger");
const body = document.querySelector(".body");

hamburger.addEventListener("click", () => {
  overlay.classList.toggle("display-none");
  console.log("clicked");
  body.classList.toggle("overflow-hidden");
});
overlay.addEventListener("click", () => {
  overlay.classList.toggle("display-none");
  console.log("clicked");
  body.classList.toggle("overflow-hidden");
});

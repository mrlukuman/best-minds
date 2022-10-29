const overlay = document.querySelector(".overlay");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  overlay.classList.toggle("display-none");
  console.log("clicked");
});
overlay.addEventListener("click", () => {
  overlay.classList.toggle("display-none");
  console.log("clicked");
});

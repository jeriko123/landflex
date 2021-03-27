const hamburgerContainer = document.querySelector("#header__main-nav");
const hamburger = document.querySelector(".header__main-nav--hamburger");
const links = document.querySelectorAll(".header__main-nav--links li");

hamburger.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("clicked");
  if (hamburgerContainer.classList.contains("clicked")) {
    links.forEach((item, id) => {
      item.style.transition = `all 0.5s ease-in-out ${0.1 + id * 0.25}s`;
      item.classList.toggle("fade");
    });
  } else {
    links.forEach((item, id) => {
      item.style.transition = `none`;
      item.classList.remove("fade");
    });
  }
});

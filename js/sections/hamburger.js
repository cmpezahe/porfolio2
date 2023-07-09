var burger = document.querySelector(".hamburger");
var navUl = document.querySelector(".navlist");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  navUl.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  // If the clicked element is not the navbar, a link, or the hamburger icon
  if (
    !navUl.contains(event.target) &&
    !event.target.matches(".navlist") &&
    !burger.contains(event.target)
  ) {
    // Remove the "active" class from the navbar to close it
    navUl.classList.remove("active");
    burger.classList.remove("active");
  }
});

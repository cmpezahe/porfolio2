var burger = document.querySelector(".hamburger");
var navUl = document.querySelector(".navlist");

// Function to close the menu
function closeMenu() {
  burger.classList.remove("active");
  navUl.classList.remove("active");
}

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  navUl.classList.toggle("active");
});

// Add event listener to anchor tags
var anchorTags = document.querySelectorAll(".navlist a");
for (var i = 0; i < anchorTags.length; i++) {
  anchorTags[i].addEventListener("click", function () {
    closeMenu();
  });
}

document.addEventListener("click", function (event) {
  // If the clicked element is not the navbar, a link, or the hamburger icon
  if (
    !navUl.contains(event.target) &&
    !event.target.matches(".navlist") &&
    !burger.contains(event.target)
  ) {
    // Remove the "active" class from the navbar to close it
    closeMenu();
  }
});

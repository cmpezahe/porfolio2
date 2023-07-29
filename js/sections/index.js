// Button text
const readMoreText = "Read more";
const readLessText = "Read less";

// Get elements
const buttons = document.querySelectorAll(".show-more");

// Toggle function
function toggleText() {
  const text = this.previousElementSibling;

  text.classList.toggle("expanded");

  if (text.classList.contains("expanded")) {
    this.innerText = readLessText;
    this.classList.add("show-less");
    this.classList.remove("show-more");
  } else {
    this.innerText = readMoreText;
    this.classList.add("show-more");
    this.classList.remove("show-less");
  }
}

// Add click event to each button
buttons.forEach((button) => {
  button.addEventListener("click", toggleText);
});

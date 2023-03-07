const body = document.body;
const toggleBtn = document.querySelector(".toggle-btn");
let isDarkMode = false;

toggleBtn.addEventListener("click", () => {
  if (isDarkMode) {
    body.classList.remove("dark-mode");
    toggleBtn.textContent = "Dark Mode";
    isDarkMode = false;
  } else {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "Light Mode";
    isDarkMode = true;
  }
});

const sliderImages = document.querySelectorAll(".slide");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
let current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

arrowLeft.addEventListener("click", () => {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

arrowRight.addEventListener("click", () => {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menu.classList.add("show");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menu.classList.remove("show");
    menuOpen = false;
  }
});

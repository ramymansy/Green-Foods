let slideshow = document.getElementById("slideshow");
let slides = slideshow.getElementsByTagName("img");
let slideshowText = document.getElementById("slideshowText");
let slidesText = slideshowText.getElementsByTagName("div");
let index = 0;
let i = 0;

function prevSlide() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}
function nextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prevSlideText() {
  slidesText[i].classList.remove("active");
  i = (i - 1 + slidesText.length) % slidesText.length;
  slidesText[i].classList.add("active");
}
function nextSlideText() {
  slidesText[i].classList.remove("active");
  i = (i + 1) % slidesText.length;
  slidesText[i].classList.add("active");
}

function menuToggle() {
  let nav = document.getElementById("navbar");
  nav.classList.toggle("active");
}

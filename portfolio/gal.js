const slideshowContainer = document.querySelector('.slideshow-container');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  updateSlide();
}

function updateSlide() {
  slideshowContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(nextSlide, 3000); 
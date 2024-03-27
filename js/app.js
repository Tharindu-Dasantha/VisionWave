// Slider Script
const slider = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

// Function to move to the next slide
function nextSlide() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Function to move to the previous slide
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Add event listeners to buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);


//  Slider Script ends

var slides = document.querySelectorAll("#slides .slide");
var currentslides = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentslides].className = 'slide';
  currentslides = (currentslides + 1) % slides.length;

  slides[currentslides].className = 'slide showing';
}
console.log(slides.length);

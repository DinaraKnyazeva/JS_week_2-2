let currentImage = 1;
let totalImages = 8;

function nextSlides() {
  currentImage++;
  if (currentImage > totalImages) {
    currentImage = 1;
  }
  document.getElementById("img").src = "images/cat" + currentImage + ".jpg";
}

function prevSlides() {
  currentImage--;
  if (currentImage < 1) {
    currentImage = totalImages;
  }
  document.getElementById("img").src = "images/cat" + currentImage + ".jpg";
}

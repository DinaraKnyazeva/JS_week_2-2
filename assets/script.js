// мин.кол-во картинок
let currentImage = 1;
// макс.кол-во картинок
let totalImages = 8;

function nextSlides() {
  // например: один клик на право получается 1+1
  currentImage++;
  // проверка: если 3 не больше 8 то дальше (чтобы было как "карусель")
  if (currentImage > totalImages) {
    currentImage = 1;
  }
  // здесь src путь склеивается со значение 3 (т.е. картинка №3)
  document.getElementById("img").src = "images/cat" + currentImage + ".jpg";
}
// то же самое только в обратную сторону
function prevSlides() {
  currentImage--;
  if (currentImage < 1) {
    currentImage = totalImages;
  }
  document.getElementById("img").src = "images/cat" + currentImage + ".jpg";
}

let contar = 1

document.getElementById('radio1').checked = true

setInterval(() => {
  nextImage()
}, 6000)

function nextImage() {
  contar++
  if (contar > 4) {
    contar = 1
  }

  document.getElementById('radio' + contar).checked = true
}

/* 
const imagensDestaque = document.querySelectorAll(".imagensDestaques img");
imagensDestaque.forEach((img, index) => {
  img.style.border = '20px solid red';
  img.style.marginright = '-20px';
})
*/

const slides = document.querySelectorAll('#paginas .slide');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slideIndex, i) => {
    if (i === index) {
      slideIndex.classList.add("active");
    } else {
      slideIndex.classList.remove("active");
    }
  });
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

showSlide(currentIndex);
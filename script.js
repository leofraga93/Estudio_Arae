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
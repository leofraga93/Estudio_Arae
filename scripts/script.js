/* Abrir menu suspenso */
const menu = document.getElementById('menu-items');
const burguer = document.getElementById('menu-burguer');

const projectsContainer = document.querySelector('.projects');
const cards = document.querySelectorAll('.infoProjects');
const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');

/* const scrollAmount = 260; */
let index = 0;
const cardWidth = cards[0].offsetWidth + 18;

window.addEventListener('resize', tamanhoJanela)
window.addEventListener('DOMContentLoaded', () => {
  burguer.addEventListener('click', cliqueMenu)
  tamanhoJanela()
})

function tamanhoJanela() {
  /* mudado para incluir transição ao abrir menu suspenso
  
  window.innerWidth >= 768 ? (menu.style.display = 'block') : (menu.style.display = 'none') 
  */

  /* window.innerWidth >= 768 
    ? (menu.classList.remove('ativo'), showFrame()) 
    : (menu.classList.add('ativo'), showFrame()) */
  showFrame();
}

function cliqueMenu() {
  if (menu.classList.contains('ativo')) {
    menu.classList.remove('ativo')
    burguer.innerText = 'menu'
  } else {
    menu.classList.add('ativo')
    burguer.innerText = 'menu_open'
  }
}

/* Automação do Carrossel */
let contar = 1

document.getElementById('radio1').checked = true;

setInterval(() => {
  nextImage()
}, 6000);

function nextImage() {
  contar++
  if (contar > 3) {
    contar = 1;
  }

  document.getElementById('radio' + contar).checked = true;
}

btnNext.addEventListener('click', () => {
  /* projectsContainer.scrollLeft += scrollAmount; */
  index++;
  if (index >= cards.length) {
    index = 0;
  }
  projectsContainer.scrollTo({
    left: index * cardWidth,
    behavior: 'smooth'
  });

});

btnPrev.addEventListener('click', () => {
  /* projectsContainer.scrollLeft -= scrollAmount */
  index--;
  if (index < 0) {
    index = cards.length - 1;
  }
  projectsContainer.scrollTo({
    left: index * cardWidth,
    behavior: 'smooth'
  });

});

const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const frames = document.querySelectorAll('.frame');

let currentIndex = 0;

function showFrame() {
  frames.forEach((frame, i) => {
    frame.classList.toggle('active', i === currentIndex);
  });

  const containerSlides = document.querySelector('.containerSlides');
  const framesWidth = frames[0].offsetWidth;
  containerSlides.style.transform = `translateX(-${currentIndex * framesWidth}px)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + frames.length) % frames.length;
  showFrame();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % frames.length;
  showFrame();
});

showFrame();
let scrollableDiv = document.getElementsByClassName("slider-scrollable")[0];
let figures = scrollableDiv.children;
let index = 2; // Inicia no terceiro elemento (index 2) para centralizar no início

// Função para atualizar a posição do slider, exibindo 3 imagens e focando na imagem à direita
function updateSliderPosition() {
  // Multiplicamos por -500px (tamanho do figure) e ajustamos para focar a imagem à direita
  scrollableDiv.style.transform = `translateX(${-((index - 2) * 500)}px)`;
}

// Navega para a direita
function sliderRight() {
  figures[index].classList.remove("active");

  if (index < figures.length - 1) {
    index++;
  } else {
    // Quando chegar na última imagem, volta para o início
    index = 2;
  }
  
  figures[index].classList.add("active");
  updateSliderPosition();
}

// Navega para a esquerda
function sliderLeft() {
  figures[index].classList.remove("active");

  if (index > 2) {
    index--;
  } else {
    // Volta para a última imagem exibindo-a à direita quando está no começo
    index = figures.length - 1;
  }
  
  figures[index].classList.add("active");
  updateSliderPosition();
}

// Seleciona todos os elementos com o atributo data-controle
const controle = document.querySelectorAll('[data-controle]');

// Seleciona todos os elementos com o atributo data-estatistica
const estatisticas = document.querySelectorAll('[data-estatistica]');

// Objeto com as estatísticas de diferentes tipos de peças de robô
const pecas = {
  "bracos": {
    "forca": 29,
    "poder": 35,
    "energia": -21,
    "velocidade": -5
  },

  "blindagem": {
    "forca": 41,
    "poder": 20,
    "energia": 0,
    "velocidade": -20
  },
  "nucleos": {
    "forca": 0,
    "poder": 7,
    "energia": 48,
    "velocidade": -24
  },
  "pernas": {
    "forca": 27,
    "poder": 21,
    "energia": -32,
    "velocidade": 42
  },
  "foguetes": {
    "forca": 0,
    "poder": 28,
    "energia": 0,
    "velocidade": -2
  }
};

// Adiciona um ouvinte de eventos de clique a cada elemento do array controle
controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatisticas(evento.target.dataset.peca);
  });
});

// Atualiza os dados do contador de peças
function manipulaDados(operacao, controle) {
  const peca = controle.querySelector('[data-contador]');

  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

const robots = document.querySelectorAll('.robo');

let currentIndex = localStorage.getItem('currentIndex') || 0; 

robots.forEach((robot) => {
  robot.addEventListener("click", () => {
  if (currentIndex < 7){
   currentIndex++
   showRobot(currentIndex)
  }
  else {
    currentIndex = 0 
    showRobot(currentIndex)
  }
  });
});

function showRobot (currentIndex) {
  for (i=0; i <robots.length -1; i++) {
    if (robots[i] = robots[currentIndex]){
      robots[currentIndex].classList.remove('hidden')
    }
    else {
      robots[i].classList.add('hidden')
    }
}
}






// robotImage.addEventListener('click', function() {
//     currentIndex++;
//     if(currentIndex >= images.length){
//       currentIndex = 0;
//     }
//     robotImage.src = images[currentIndex];
    
// });

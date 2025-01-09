let button = document.getElementById('nao');
let texto = document.getElementById('texto');
document.getElementById('sim').addEventListener('click', function () {
  window.location.href = 'carta.html';
});
// Inicializa o contador
let moveCount = 0;

// Obtém o tamanho do botão
const buttonWidth = button.offsetWidth;
const buttonHeight = button.offsetHeight;

function updateBounds() {
  // Atualiza os limites com base no tamanho da janela e do botão
  h = window.innerHeight - buttonHeight;
  w = window.innerWidth - buttonWidth;
}

updateBounds(); // Configura os limites iniciais

// Atualiza os limites ao redimensionar a janela
window.addEventListener('resize', updateBounds);

button.addEventListener('mouseover', function () {
  // Atualiza a posição do botão
  button.style.position = "absolute";
  button.style.top = Math.random() * h + "px";
  button.style.left = Math.random() * w + "px";

  // Incrementa o contador de movimentos
  moveCount++;

  // Verifica se o botão mudou de posição 3 vezes
  if (moveCount === 3) {
    texto.textContent = "APERTE LOGO EM SIM!";
    moveCount = 0; // Reseta o contador, se necessário
  }
});


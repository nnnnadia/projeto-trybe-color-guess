const writtenColor = document.querySelector('#rgb-color');

/*
  getRandomColor recebe três valores aleatórios entre 0 e 255 de getRandomBtn0255 e retorna uma cor no formato rgb(x , y , z).
*/

function getRandomBtn0255() {
  const colorValue = Math.ceil(Math.random() * 255);
  return colorValue;
}

function getRandomColor() {
  const r = getRandomBtn0255();
  const g = getRandomBtn0255();
  const b = getRandomBtn0255();
  const colorRGB = `rgb(${r} , ${g}, ${b})`;
  return colorRGB;
}

function generateColorToGuess() {
  const secretColor = getRandomColor();
  writtenColor.innerText = secretColor;
}

window.onload = () => {
  generateColorToGuess();
};

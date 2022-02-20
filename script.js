const writtenColor = document.querySelector('#rgb-color');
const posibleColors = document.querySelector('#posible-colors');

/*
  getRandomColor recebe três valores aleatórios entre 0 e 255 de getRandomBtn0255 e retorna uma cor no formato rgb(x , y , z).
*/

function getRandomBtn0255() {
  const colorValue = Math.round(Math.random() * 255);
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
  const mysteryColor = getRandomColor();
  writtenColor.innerText = mysteryColor;
  return mysteryColor;
}

function generateColorList(mysteryColor) {
  const mysteryPosition = Math.round(Math.random() * 5);
  const colorList = [];
  for (let i = 0; i < 6; i += 1) {
    if (i !== mysteryPosition) {
      colorList.push(getRandomColor());
    } else {
      colorList.push(mysteryColor);
    }
  }
  return colorList;
}

function appendPosibleColors(colorList) {
  for (let color of colorList) {
    const colorPicker = document.createElement('div');
    const colorPickerColor = getRandomColor();
    colorPicker.style.backgroundColor = colorPickerColor;
    colorPicker.classList.add('ball');
    posibleColors.appendChild(colorPicker);
  }
}

function setGame() {
  const mysteryColor = generateColorToGuess();
  const colorList = generateColorList(mysteryColor);
  appendPosibleColors(colorList);
}

window.onload = () => {
  setGame();
};

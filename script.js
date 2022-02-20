const writtenColor = document.querySelector('#rgb-color');
const posibleColors = document.querySelector('#posible-colors');
const commandText = document.querySelector('#answer');

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
  const colorRGB = `rgb(${r}, ${g}, ${b})`;
  return colorRGB;
}

function generateColorToGuess() {
  const mysteryColor = getRandomColor();
  writtenColor.innerText = mysteryColor;
  return mysteryColor;
}

/*
  colorList = [
    {
      color: rgb (x , y , z),
      answer: false,
    },
    {
      color: rgb (x , y , z),
      answer: true,
    },
  ]
*/
function generateColorList(mysteryColor) {
  const mysteryPosition = Math.round(Math.random() * 5);
  const colorList = [];
  for (let i = 0; i < 6; i += 1) {
    const colorObject = {};
    if (i !== mysteryPosition) {
      colorObject.color = getRandomColor();
      colorObject.answer = false;
    } else {
      colorObject.color = mysteryColor;
      colorObject.answer = true;
    }
    colorList.push(colorObject);
  }
  return colorList;
}

function checkAnswer(event) {
  if (event.target.classList.contains('answer')) {
    commandText.innerText = 'Acertou!';
  } else {
    commandText.innerText = 'Errou! Tente novamente!';
  }
}

function appendPosibleColors(colorList) {
  for (let i = 0; i < 6; i += 1) {
    const colorPicker = document.createElement('div');
    const colorPickerColor = colorList[i].color;
    colorPicker.style.backgroundColor = colorPickerColor;
    colorPicker.classList.add('ball');
    if (colorList[i].answer === true) {
      colorPicker.classList.add('answer');
    }
    colorPicker.addEventListener('click', checkAnswer);
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

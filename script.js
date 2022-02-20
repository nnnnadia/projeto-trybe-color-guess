const writtenColor = document.querySelector('#rgb-color');
const posibleColors = document.querySelector('#posible-colors');
const commandText = document.querySelector('#answer');
const mysteryColorDiv = document.querySelector('#mystery-color');
const scoreElement = document.querySelector('#score');
let score = 0;

/*
  getRandomColor() recebe três valores aleatórios entre 0 e 255 de getRandomBtn0255() e retorna uma cor no formato rgb(x , y , z).
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

/*
  generateColorToGuess() exibe valor rgb para ser adivinhado e retorna a cor.
*/

function generateColorToGuess() {
  const mysteryColor = getRandomColor();
  writtenColor.innerText = mysteryColor;
  return mysteryColor;
}

/*
  generateColorList() cria uma lista de cores e insere aleatoriamente a cor que deverá ser adivinhada, cada cor é acompanhada pelo valor booleano que indica qual é a resposta certa.
  Estrutura de dado da colorList:
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

function countPoints(hit) {
  if (hit === true) {
    score += 3;
  } else {
    score -= 1;
  }
  scoreElement.innerText = score;
}

function checkAnswer(event) {
  event.target.style.border = '5px double black';
  if (event.target.classList.contains('answer')) {
    commandText.innerText = 'Acertou!';
    countPoints(true);
  } else {
    commandText.innerText = 'Errou! Tente novamente!';
    countPoints(false);
  }
  const colorAnswer = document.querySelector('.answer').style.backgroundColor;
  mysteryColorDiv.style.backgroundColor = colorAnswer;
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
  commandText.innerText = 'Escolha uma cor';
  const colorList = generateColorList(mysteryColor);
  appendPosibleColors(colorList);
}

function resetGame() {
  for (let i = 5; i >= 0; i -= 1) {
    posibleColors.children[i].remove();
  }
  mysteryColorDiv.style.backgroundColor = 'white';
  setGame();
}

const resetBtn = document.querySelector('#reset-game');
resetBtn.addEventListener('click', resetGame);

window.onload = () => {
  setGame();
};

const changeColorBtnEl = document.querySelector(".change-color");
const colorValueEl = document.querySelector(".color");
const backgroundColorEl = document.querySelector("body");

changeColorBtnEl.addEventListener("click", changeBodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyColor(){
  colorValueEl.textContent = backgroundColorEl.style.backgroundColor = getRandomHexColor();
}


/*
// Var 2
const changeColorBtnEl = document.querySelector(".change-color");
const colorValueEl = document.querySelector(".color");
changeColorBtnEl.addEventListener("click", changeBodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeBodyColor(){
  colorValueEl.textContent = document.querySelector("body").style.backgroundColor = getRandomHexColor();
}


// Var 3
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorValueEl = document.querySelector('.color');
const changeColorBtnEl = document.querySelector('.change-color');
const backgroundColorEl = document.body;

const changeColor = () => {
  colorValueEl.textContent = getRandomHexColor();
  backgroundColorEl.style.backgroundColor = getRandomHexColor();
};
changeColorBtnEl.addEventListener('click', changeColor);

*/



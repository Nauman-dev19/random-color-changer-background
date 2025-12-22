import { changeColor } from './functions.js';
// assigning variables to buttons
const btns = document.querySelector(`.btns`);
const changeBtn = document.querySelector(`#changeBtn`);
// function to change background color
changeBtn.addEventListener(`click`, changeColor);

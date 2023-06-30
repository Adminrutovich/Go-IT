let counter = 0;

const decrementEl = document.querySelector('button[data-action="decrement"]');
let counterValue = document.querySelector("#value");
const incrementEl = document.querySelector('button[data-action="increment"]');
console.log(decrementEl);
console.log(counterValue);
console.log(incrementEl);


const decrementClick = () => {
  counterValue.textContent = `${counter -= 1}`;
  console.log("click event listener callback");
};
const incrementClick = () => {
    counterValue.textContent = `${counter += 1}`;
    console.log("click event listener callback");
  };

decrementEl.addEventListener("click", decrementClick);
incrementEl.addEventListener("click", incrementClick);
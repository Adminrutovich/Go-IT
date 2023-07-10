const inputEl = document.querySelector('input#font-size-control')
const textForChangeSize = document.querySelector('span#text')

const fontSizeControl = ((event) => {
    textForChangeSize.style.fontSize = `${event.target.value }px`
})

inputEl.addEventListener('change', fontSizeControl); 

/*
// Var 2
const inputEl = document.querySelector('input[id="font-size-control"]');
const textForChangeSize = document.querySelector('span[id="text"]');
console.log(inputEl);
console.log(textForChangeSize);

const fontSizeControl = (event) => {
  textForChangeSize.style.fontSize = event.currentTarget.value + 'px'; 
};

inputEl.addEventListener('input', fontSizeControl);


// Var 3
const inputEl = document.getElementById('font-size-control');
const textForChangeSize = document.getElementById('text');

inputEl.addEventListener('input', event => {
  textForChangeSize.style.fontSize = event.currentTarget.value + 'px'; 
});
*/

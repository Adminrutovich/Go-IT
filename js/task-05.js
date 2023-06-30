
const nameInputEl = document.querySelector('input[id="name-input"]');
const nameOutputEl = document.querySelector('span[id="name-output"]');
console.log(nameInputEl);
console.log(nameOutputEl);

const callback = ((event) => {
    nameOutputEl.textContent = event.currentTarget.value;
  });


nameInputEl.addEventListener("input", callback);




/*
const nameInputEl = document.querySelector('input[id="name-input"]');
const nameOutputEl = document.querySelector('span[id="name-output"]');
console.log(nameInputEl);
console.log(nameOutputEl);

nameInputEl.addEventListener("input", (event) => {
    nameOutputEl.textContent = event.currentTarget.value;
  });
*/
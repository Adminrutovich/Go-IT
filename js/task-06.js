const inputEl = document.querySelector("#validation-input");
document.querySelector('body').style.backgroundColor = '#EBECF0';


const onBlurBorderColor = () => {
    const inputValue = inputEl.getAttribute('data-length');
    
    if (inputEl.value.length === Number(inputValue)) {
        inputEl.classList.add('valid');
    }
    if (inputEl.value.length === 0) {
        inputEl.classList.remove('valid');
        inputEl.classList.remove('invalid');
    }
    if (inputEl.value.length !== Number(inputValue) && inputEl.value.length !== 0) {
        inputEl.classList.add('invalid');
    }
}

  inputEl.addEventListener('blur', onBlurBorderColor);

//   function onBlurBorderColor(event) {
//     let inputValue = event.currentTarget.value;
//     if (inputValue.length === Number(inputEl.dataset.length)) {
//       inputEl.classList.add('valid');
//     }
//     if (inputEl.value.length === 0) {
//       inputEl.classList.remove('valid');
//       inputEl.classList.remove('invalid');
//     }
//     if (
//       inputEl.value.length !== Number(inputEl.dataset.length) &&
//       inputEl.value.length !== 0
//     ) {
//       inputEl.classList.add('invalid');
//     }
//   }

//   inputEl.addEventListener('blur', onBlurBorderColor);
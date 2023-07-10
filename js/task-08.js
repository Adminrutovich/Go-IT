
const form = document.querySelector(".login-form");
// console.log(form);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  console.log(formElements);
  const email = formElements.email.value;
  const password = formElements.password.value;
  console.log(email, password);
  if (email === "" || password === "") {
    alert("All fields must be filled" )
    }
  const formData = {email, password};
  console.log(formData);
  form.reset()
}

/*
// Var 2
function onFormSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // console.log(formData);
    formData.forEach((value, name) => {
        if (value === "") {
        alert("All fields must be filled" )
        }
        const formElements = {name, value}
        console.log(formElements);
    });
    form.reset()
}

// Var 3

const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('All fields must be filled')
    }
    const userDetails = { email: email.value, Password: password.value }
    
    console.log(userDetails)
    event.currentTarget.reset()
}
*/

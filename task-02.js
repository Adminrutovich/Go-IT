const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = [];
const ingredientsContainer = document.querySelector('ul');
ingredients.forEach(item => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = item;
  ingredientEl.classList.add('item');
  ingredientsEl.push(ingredientEl);
});
ingredientsContainer.append(...ingredientsEl);
console.log(ingredientsEl);

/*
const ingredientsEl = document.querySelector('#ingredients');

const itemsEl = ingredients.map((ingredient) => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
});

ingredientsEl.append(...itemsEl);

const ingredientsEl = document.querySelector("#ingredients");
const ingredientsMarkup = [];

function createIngredientsList(ingredients = []) {
  ingredients.map((elem) => {
    const item = document.createElement("li");
    item.textContent = elem;
    item.classList.add("item");
    ingredientsMarkup.push(item);
  });
  ingredientsEl.append(...ingredientsMarkup);
}

createIngredientsList(ingredients);

*/
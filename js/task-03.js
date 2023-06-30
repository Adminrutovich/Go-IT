const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");

const  elements = images.map((image) => {
  list.insertAdjacentHTML("afterbegin", `<li> <img class="picture" src=${image.url} alt=${image.alt}><li>`)
  }).join('');
  const pictures = document.querySelectorAll('.picture')

  list.style.display = 'flex';
  list.style.flexWrap = 'wrap';


/*
const list = document.querySelector('.gallery')

const elements = images
  .map(image => `<li><img class="picture" src=${image.url} alt='${image.alt}'></img></li>`)
  .join('');

  list.insertAdjacentHTML('beforeend', elements)

  
const pictures = document.querySelectorAll('.picture')

list.style.display = 'flex';
list.style.flexWrap = 'wrap';


const list = document.querySelector(".gallery");

const  elements = images.map((image) => {
  const imageEl = document.createElement('img');
  imageEl.src = image.url;
  imageEl.alt = image.alt;
  imageEl.classList.add('gallery_item');
  const liEl = document.createElement('li');
  list.append(liEl, imageEl);
  });

*/


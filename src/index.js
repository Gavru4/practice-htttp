import fetchMovie from './movieService';
import './sass/main.scss';
import debounce from 'lodash.debounce';
import movieItem from './templates/movieItem.hbs';

const inputEl = document.querySelector('.input');
const listEl = document.querySelector('ul');
const btnLoad = document.querySelector('button');

let inputValue = '';
let page = 1;

inputEl.addEventListener('input', debounce(getMovie, 300));
btnLoad.addEventListener('click', loadMore);
function getMovie() {
  inputValue = inputEl.value;
  listEl.innerHTML = '';
  btnLoad.style.display = 'none';
  page = 1;
  if (inputValue.trim() === '') return;
  fetchMovie(inputValue)
    .then(data => {
      createMarkup(data.results);
      return data;
    })
    .then(data => {
      if (!data.results.length) {
        console.log('return');
        btnLoad.style.display = 'none';
        return;
      }
      btnLoad.style.display = 'inline-block';
    });
}

function createMarkup(array) {
  const markup = movieItem(array);
  listEl.insertAdjacentHTML('beforeend', markup);
}

function loadMore() {
  page += 1;
  fetchMovie(inputValue, page).then(data => createMarkup(data.results));
}
console.log(data.results);

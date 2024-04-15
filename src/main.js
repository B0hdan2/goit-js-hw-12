// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// img
import error from './img/group.svg';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

import { formEl, galleryList, loaderEl, buttonLoadMore } from './js/refs';
import { requestToServer } from './js/pixabay-api';
import { renderCard } from './js/render-functions';

let page = 1;
let searchQuery = null;

formEl.addEventListener('submit', onSubmit);
buttonLoadMore.addEventListener('click', photoUploadMore);

function onSubmit(event) {
  event.preventDefault();

  searchQuery = event.currentTarget.elements.search.value.trim();

  buttonLoadMore.classList.add('is-hidden');
  loaderEl.classList.remove('is-hidden');
  galleryList.innerHTML = '';

  requestToServer(searchQuery, (page = 1))
    .then(response => {
      if (searchQuery === '' || response.data.hits.length === 0) {
        buttonLoadMore.classList.add('is-hidden');

        iziToast.error({
          iconUrl: error,

          message: `Sorry, there are no images matching<br> your search query. Please try again!`,
          messageHTML: true,
          messageColor: '#fff',
          messageSize: '16px',

          backgroundColor: '#ef4040',

          position: 'topRight',

          transitionIn: 'fadeInLeft',
        });

        return;
      }

      galleryList.innerHTML = renderCard(response.data.hits);

      if (response.data.totalHits > 15) {
        buttonLoadMore.classList.remove('is-hidden');
      }

      lightbox.refresh();
    })
    .catch(error => console.log(error))
    .finally(() => {
      loaderEl.classList.add('is-hidden');
    });
}

function photoUploadMore() {
  page++;
  requestToServer(searchQuery, page)
    .then(response => {
      loaderEl.classList.remove('is-hidden');

      galleryList.insertAdjacentHTML(
        'beforeend',
        renderCard(response.data.hits)
      );

      const { height: cardHeight } = document
        .querySelector('.gallery')
        .firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 3,
        behavior: 'smooth',
      });

      const lastPage = Math.ceil(response.data.totalHits / 15);
      if (lastPage === page) {
        iziToast.error({
          iconUrl: error,

          message: `We're sorry, but you've reached the end of search`,
          messageHTML: true,
          messageColor: '#fff',
          messageSize: '16px',

          backgroundColor: '#ef4040',

          position: 'topRight',

          transitionIn: 'fadeInLeft',
        });
        loaderEl.classList.add('is-hidden');
        buttonLoadMore.classList.add('is-hidden');
        // buttonLoadMore.addEventListener.remove('click', photoUploadMore);
      }

      loaderEl.classList.add('is-hidden');
    })
    .catch(console.log());
}

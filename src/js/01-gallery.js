// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', markup);
console.log(galleryItems);

galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();
  const isTargetImg = e.target.classList.contains('gallery__image');
  if (!isTargetImg) return;
}
let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250' });

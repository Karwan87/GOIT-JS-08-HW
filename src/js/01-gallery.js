import simpleLightbox from 'simplelightbox';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryItemsMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
  )
  .join('');

gallery.innerHTML = galleryItemsMarkup;

const lightbox = new SimpleLightbox('.gallery__item', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  closeText: 'x',
  history: false,
  nav: true,
  navText: ['&lt;', '&gt;'],
  showCounter: true,
  disableScroll: false,
  blockScroll: true,
  closeOnOverlayClick: true,
  closeOnEscape: true,
  docClose: true,
  swipeClose: true,
  scroll: { duration: 250, easing: 'easeOutQuad', offset: 0, passive: false },
});

lightbox.on('open', () => {
  document.documentElement.setAttribute('aria-hidden', 'true');
});

lightbox.on('close', () => {
  document.documentElement.removeAttribute('aria-hidden');
});
console.log(galleryItems);

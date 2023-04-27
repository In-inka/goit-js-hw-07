import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imgGallary = galleryItems
  .map(
    img =>
      `
<li class="gallery__item">
   <a class="gallery__link" href=${img.original}>
      <img class="gallery__image" src=${img.preview} alt=${img.description} />
   </a>
</li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', imgGallary);

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */ captionsData: 'alt',
  captionDelay: '250',
});

lightbox.on('show.simplelightbox');

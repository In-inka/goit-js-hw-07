import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

let isModalOpen = false;

const imgGallary = galleryItems
  .map(
    img =>
      `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src= ${img.preview}
      data-source=${img.original}
      alt=${img.description}
    />
  </a>
</li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', imgGallary);

gallery.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  onBasicLightboxClick(event);
});

function onBasicLightboxClick(event) {
  const imgOriginal = event.target.dataset.source;
  const modal = basicLightbox.create(
    `
		<img src=${imgOriginal}>
	`
  );
  modal.show();

  isModalOpen = true;
}

/* document.addEventListener('keydown', event => {
  if (event.code === 'Escape' && isModalOpen) {
    ???.close();
    isModalOpen = false;
  }
}); */

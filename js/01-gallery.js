import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

//змінна для перевірки відкритого модального вікна
let isModalOpen = false;

const imgGallary = galleryItems
  .map(
    img =>
      `<li class="gallery__item">
  <a class="gallery__link" href=${img.original}>
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

  onImgClick(event);
});

function onImgClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const modal = basicLightbox.create(
    `
		<img src=${event.target.dataset.source}>
	`
  );
  modal.show();
  isModalOpen = true;

  gallery.addEventListener('keydown', event => {
    if (event.code === 'Escape' && isModalOpen) {
      modal.close();
    }
  });
}

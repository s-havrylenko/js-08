import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryCardsMarkup (pictures) {
    return pictures.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img 
                class="gallery__image" 
                src="${preview}" 
                title="${description}"
            />
        </a>
        `;
    })
    .join('');
}
  
function onGalleryContainerClick(event) {
    event.preventDefault();
         
    if (event.target.nodeName !== "IMG") {
        return;
    }

   console.log(event.target);

    new SimpleLightbox('.gallery a', {
       captionDelay: 150,       
    });
}
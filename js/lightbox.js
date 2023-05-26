import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryCardsMarkup (pictures) {
    return pictures.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img 
                    class="gallery__image" 
                    src="${preview}" 
                    title="${description}"
                    alt="${description}"
                />
            </a>
        </li>
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
import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryCardsMarkup (pictures) {
    return pictures.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    })
    .join('');
        
}

function onGalleryContainerClick(event) {
    event.preventDefault();
         
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    console.log(event.target);

    const currentOriginaImg = event.target.getAttribute("data-source");

    console.log(currentOriginaImg);

    opensModal(currentOriginaImg);
} 

function opensModal(currentOriginaImg) {
    const instance = basicLightbox.create(`<img src="${currentOriginaImg}" width="800" height="600">`);
    instance.show();

    galleryContainer.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            instance.close();
        }
    });   
  
    // galleryContainer.addEventListener('keydown', onEscPress);

    // function onEscPress(event) {
    //     if (event.key === "Escape") {
    //         instance.close();
    //     }
    // }
}


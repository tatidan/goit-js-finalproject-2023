// import { galleryItems } from "./gallery-items";
import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const galleryView = createGalleryItems(galleryItems);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}" class="gallery__item">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("afterbegin", galleryView);

const simpleLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// console.log(simpleLightbox);

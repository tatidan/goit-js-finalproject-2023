import { galleryItems } from "./gallery-items.js";

const galleryNode = document.querySelector(".gallery");
const gallerySet = createGallerySet(galleryItems);

function createGallerySet(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link"
            href="${original}"
        >
          <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
      `;
    })
    .join("");
}

galleryNode.insertAdjacentHTML("afterbegin", gallerySet);

galleryNode.addEventListener("click", onClickModalOpen);

function onClickModalOpen(event) {
  event.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      handler: null,
      onShow(instance) {
        this.handler = onEscapeClose.bind(instance);
        document.addEventListener("keydown", this.handler);
      },
      onClose() {
        document.removeEventListener("keydown", this.handler);
      },
    }
  );

  instance.show();
}

function onEscapeClose({ code }) {
  if (code === "Escape") {
    this.close();
  }
}

// Импорт библиотеки
import SimpleLightbox from "simplelightbox";
// Импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

// Создает строку разметки из исходного массива
function createMarkup(array){return array.map((item)=> {
    const newElement = `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`;
    return newElement;})
    .join("")
}

//Создаёт галерею, преобразуя строку разметки
function createGallery(parent, array){
   return parent.innerHTML = createMarkup(array);
}

createGallery(galleryRef, galleryItems);

const modal = new SimpleLightbox('.gallery a', {captionsData:'alt', captionDelay: 250});
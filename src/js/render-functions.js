import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const btmMore = document.querySelector(".load-more")
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
    const markUp = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="card" id="">
            <div class="card-img">
                <a href=${largeImageURL}><img src=${webformatURL} alt=${tags} title=""/></a>
            </div>
            <ul class="card-info-list">
                <li class="card-info-item">
                    <p class="card-info-title">Likes</p>
                    <p class="card-info-text">${likes}</p>
                </li>
                <li class="card-info-item">
                    <p class="card-info-title">Views</p>
                    <p class="card-info-text">${views}</p>
                </li>
                <li class="card-info-item">
                    <p class="card-info-title">Comments</p>
                    <p class="card-info-text">${comments}</p>
                </li>
                <li class="card-info-item">
                    <p class="card-info-title">Downloads</p>
                    <p class="card-info-text">${downloads}</p>
                </li>
            </ul>
        </li>`
    ).join("");
    gallery.insertAdjacentHTML("beforeend", markUp);
    
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    loader.classList.remove("hidden");
}

export function hideLoader() {
    loader.classList.add("hidden");
}

export function showLoadMoreButton() {
    btmMore.classList.remove("hidden");
}

export function hideLoadMoreButton() {
    btmMore.classList.add("hidden");
}
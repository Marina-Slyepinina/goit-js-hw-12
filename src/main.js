import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api"
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions"

hideLoader();

const form = document.querySelector(".form");
const btnLoadMore = document.querySelector(".load-more");
form.addEventListener("submit", handleSubmit);
btnLoadMore.addEventListener("click", handleLoadMore);

let userValue;
let page;

function handleSubmit(event) {
    hideLoadMoreButton();
    iziToast.destroy();
    clearGallery();
    showLoader();
    event.preventDefault();

    page = 1;
    userValue = event.target.elements["search-text"].value.toLowerCase();

    hideLoader();

    if (userValue.trim() === "") {
        return iziToast.show({message: "Search query cannot be empty"});
    }

    getImagesByQuery(userValue, page)
        .then(response => {
            if (response.data.hits.length) {
                const arrImg = response.data.hits;
                createGallery(arrImg);
                if (page < response.data.totalHits / response.config.params.per_page) {
                    showLoadMoreButton();
                }
                return;
            }
            hideLoadMoreButton();
            iziToast.show({
                message: "Sorry, there are no images matching your search query. Please try again!",
                backgroundColor: '#EF4040',
                position: 'center',
                messageColor: '#fafafb',
                messageSize: '16px',
                progressBarColor: '#b51b1b'
            });
        })
        .catch(error => {
            iziToast.show({
                message: error.message,
                backgroundColor: '#EF4040',
                position: 'center',
                messageColor: '#fafafb',
                messageSize: '16px',
                progressBarColor: '#b51b1b'
            });
        })

    form.reset();
}

async function handleLoadMore() {
    page++;   
    try {
        hideLoadMoreButton();
        showLoader();
        const response = await getImagesByQuery(userValue, page);
        const totalPages = response.data.totalHits / response.config.params.per_page;

        if (response.data.hits.length) {
            createGallery(response.data.hits);
            const card = document.querySelector(".card");
            const cardHeight = card.getBoundingClientRect().height;
            window.scrollBy({
                top: cardHeight * 2,
                behavior: "smooth"
            });

            hideLoader();
            if (page < totalPages) {
                showLoadMoreButton();
            }
            return;
        }
        hideLoader();
        iziToast.show({
            message: "We're sorry, but you've reached the end of search results",
            backgroundColor: '#C8E3E3',
            position: 'topRight',
            messageColor: '#000',
            messageSize: '16px',
            progressBarColor: '#fff'
        });
    } catch (error) {
        hideLoader();
        iziToast.show({
            message: error.message,
            backgroundColor: '#EF4040',
            position: 'center',
            messageColor: '#fafafb',
            messageSize: '16px',
            progressBarColor: '#b51b1b'
        })
    }
}
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImg } from "./js/pixabay-api.js";
import { displayImages, clearGallery, showLoadingIndicator, hideLoadingIndicator, toggleLoadMoreButton } from "./js/render-functions.js";

export const form = document.querySelector(".form");
const input = document.querySelector(".input-search");
const waitMsg = document.querySelector(".wait-msg");

let currentPage = 1; 
let searchTerm = ''; 
form.addEventListener("submit", (e) => {
    e.preventDefault();  

    clearGallery();
    waitMsg.innerHTML = '"Wait, the image is loading" <span class="loader"></span>';
  
    const searchName = input.value.trim();
    
    if (!searchName) {
        iziToast.show({
            backgroundColor: 'rgba(239, 64, 64, 1)',
            messageColor: `rgba(255, 255, 255, 1)`,
            close: `true`,
            position: "topRight",
            title: 'Error',
            titleColor: '#fff',
            titleSize: '16px',
            message: 'Input search string'
        });
        waitMsg.textContent = "";
        return;
    }

    if (searchName !== searchTerm) {
        searchTerm = searchName; 
        currentPage = 1; 
    } else {
        currentPage++; 
    }
  
    fetchImages(searchTerm);
});

document.getElementById('loadMore').addEventListener('click', () => {
    currentPage++; 
    fetchImages(searchTerm);
});

function fetchImages(searchTerm) {
    showLoadingIndicator(); 
    getImg(searchTerm, currentPage)
        .then(response => {
            const images = response.data.hits; 
            const totalHits = response.data.totalHits; 

            if (images.length === 0) {
                iziToast.show({
                    backgroundColor: 'rgba(239, 64, 64, 1)',
                    messageColor: `rgba(255, 255, 255, 1)`,
                    close: `true`,
                    position: "topRight",
                    title: 'Error',
                    titleColor: '#fff',
                    titleSize: '16px',
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
                toggleLoadMoreButton(false); 
            } else {
                displayImages(images); 
                toggleLoadMoreButton(currentPage * 40 < totalHits); 
            }
            waitMsg.textContent = "";
        })
        .catch(error => {
            waitMsg.textContent = 'Ups ...';
            console.log(error);
        })
        .finally(() => {
            hideLoadingIndicator(); 
        });
}

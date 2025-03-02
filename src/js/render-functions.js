import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionDelay: 250,
    close: true,
});

export function displayImages(images) {
    const gallery = document.getElementById('gallery');

    const markup = images.map(image => 
        `<li class="gallery-item">
            <a class='gallery-link' href="${image.largeImageURL}">
                <img class="li-img" src="${image.webformatURL}" alt="${image.tags}"/> 
                <div class="li-text">
                    <table class="table">
                        <tr>
                            <td>Likes</td>
                            <td>Views</td>
                            <td>Comments</td>
                            <td>Downloads</td>
                        </tr>
                        <tr>
                            <td>${image.likes}</td>
                            <td>${image.views}</td>
                            <td>${image.comments}</td>
                            <td>${image.downloads}</td>
                        </tr>
                    </table>
                </div>
            </a>
        </li>`
    ).join("");

    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}

export function clearGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    document.getElementById('loadMore').style.display = 'none'; 
}

export function showLoadingIndicator() {
    document.getElementById('loading').style.display = 'block';
}

export function hideLoadingIndicator() {
    document.getElementById('loading').style.display = 'none';
}

export function toggleLoadMoreButton(show) {
    document.getElementById('loadMore').style.display = show ? 'block' : 'none';
}

export function scrollToNextImages() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    if (galleryItems.length >= 2) {
        const cardHeight = galleryItems[0].getBoundingClientRect().height;
        window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth"
        });
    }
}

document.getElementById('loadMore').addEventListener('click', scrollToNextImages);

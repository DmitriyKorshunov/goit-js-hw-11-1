import fetchImages from "./js/fetch-images";
import cardTemplate from "./card-template.hbs";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import throttle from "lodash.throttle";
import SimpleLightbox from "simplelightbox";
import { refs } from "./js/refs-elements";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log("Привет");
//console.log(fetchImages("cat", 1));
console.log(refs.searchForm);
console.log(refs.gallery);
console.log(refs.loadMoreBtn);
console.log(refs.endCollectionText);

function renderCardImage(arr) {
  const markup = arr.map((item) => cardTemplate(item)).join("");
  gallery.insertAdjacentHTML("beforeend", markup);
}

// let lightbox = new SimpleLightbox(".photo-card a", {
//   captions: true,
//   captionsdata: "alt",
//   captionDelay: 250,
// });

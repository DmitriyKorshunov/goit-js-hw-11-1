import axios from "axios";

export default async function fetchImages(value, page) {
  const url = "https://pixabay.com/api/";
  const key = "29748617-950e0d666d0b3fa69d007eaad";
  const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${url}${filter}`).then((response) => response.data);
}

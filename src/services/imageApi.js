import axios from "axios";

const BASE_URL = "https://pixabay.com/api/?q=";
const API_KEY = "16179084-bcee517f085901c089ac4ea9d";
const REQUEST_PARAMS = "&image_type=photo&orientation=horizontal&per_page=12";

export const fetchImages = (query = "", page = 1) =>
  axios.get(`${BASE_URL}${query}&page=${page}&key=${API_KEY}${REQUEST_PARAMS}`);

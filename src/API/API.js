import axios from 'axios';

const URL = `https://pixabay.com/api/`;
const API_KEY = `19788052-12e74352d9c3069c5841e3f0b`;

export const axiosAPI = (value, page) =>
  axios
    .get(`${URL}?key=${API_KEY}&q=${value}&per_page=9&page=${page}`)
    .then(({ data }) => {
      return data;
    });

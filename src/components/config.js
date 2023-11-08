import axios from 'axios';
const API_KEY = '7525c0a6b0b373d12d109faf7aff5c2b';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/get-trending?api_key=${API_KEY}`
  );
  return response.data.results;
};
export const fetchDetails = async movie_id => {
  const params = {
    api_key: API_KEY,
    language: 'en - US',
  };
  const response = await axios.get(`${BASE_URL}movie/${movie_id}`, {params});
  return response.data;
};
export const fetchCasts = async movie_id => {
  const params = {
    api_key: API_KEY,
    language: 'en - US',
  };
  const response = await axios.get(`${BASE_URL}movie/${movie_id}/Credits`, {
    params,
  });
  return response.data;
}
  ;
  export const fetchReviews = async movie_id => {
    const params = {
      api_key: API_KEY,
      language: 'en - US',
    };
    const response = await axios.get(`${BASE_URL}movie/${movie_id}/Reviews`, {
      params,
    });
    return response.data;
  };
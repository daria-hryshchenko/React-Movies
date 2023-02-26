import axios from 'axios';

export const requestMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=d40d4389e7b694736d94163c6dd7b0a1'
  );
  return data;
};

export const requestMoviesById = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=d40d4389e7b694736d94163c6dd7b0a1&language=en-US`
  );
  return data;
};

export const requestCastById = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d40d4389e7b694736d94163c6dd7b0a1&language=en-US`
  );
  return data;
};

export const requestReviewsById = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=d40d4389e7b694736d94163c6dd7b0a1&language=en-US&page=1`
  );
  return data;
};

export const requestSeachById = async input => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=d40d4389e7b694736d94163c6dd7b0a1&language=en-US&page=1&include_adult=false&query=${input}`
  );
  return data.results;
};

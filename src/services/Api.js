const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "1f37c9d1204318c8a24c8b0a5ae713a0";

const fetchSearchFilms = async (q) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${q}`
  );
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const fetchFilms = async () => {
  const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const fetchFilmsId = async (movie_id) => {
  const res = await fetch(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

export { fetchFilms, fetchSearchFilms, fetchFilmsId };
// https://api.themoviedb.org/3/movie/$2108?api_key=1f37c9d1204318c8a24c8b0a5ae713a0

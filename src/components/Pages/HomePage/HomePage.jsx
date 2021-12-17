import { fetchFilms } from "../../../services/Api";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [movieId, setMovieId] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMovieOpen, setIsMovieOpen] = useState(false);

  useEffect(() => {
    const getFilms = async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchFilms();
        setFilms([...results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getFilms();
  }, []);

  const openMovie = (e) => {
    e.preventDefault();
    setIsMovieOpen(true);
    // setMovieId(idFilm);
    // console.log("movieId", movieId);
    // const users = fetchFilms(REQUESTS.INFO);
    // console.log("users", users);
  };

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {films.map(({ original_title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

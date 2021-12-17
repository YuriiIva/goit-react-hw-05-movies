import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchFilms, fetchSearchFilms } from "../../services/Api";
import HomePage from "../Pages/HomePage/HomePage";
import Header from "../common/Header/Header";
import Movies from "../Pages/MoviesPage/MoviesPage";

const App = () => {
  const [films, setFilms] = useState([]);
  const [movieId, setMovieId] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMovieOpen, setIsMovieOpen] = useState(false);

  // const REQUESTS = {
  //   TRANDING: "/trending/movie/day",
  //   // SEARCH: '/search/movie',
  //   INFO: `/movie/${movieId}`,
  //   CREDITS: `/movie/${movieId}/credits`,
  //   REVIEWS: `/movie/${movieId}/reviews`,
  // };

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

  //   const onCloseMovie = () => {
  //     setIsMovieOpen(false);
  //   };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage films={films} openMovie={openMovie} />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

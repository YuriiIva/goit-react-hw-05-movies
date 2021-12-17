import { useEffect, useState } from "react";
import { Route, useParams, Switch } from "react-router-dom";

import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import { fetchFilmsId } from "../../../services/Api";

import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = ({ onCloseMovie }) => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    const getMoviesById = async () => {
      try {
        const movies = await fetchFilmsId(movieId);
        console.log("getMovies", movies);
        setFilms(movies);
      } catch (error) {}
    };
    getMoviesById();
  }, [movieId]);

  return (
    <div className={s.modal}>
      <div>
        <button type="button">Go back</button>
        <img
          src={`https://image.tmdb.org/t/p/w500${films.poster_path}`}
          alt=""
          width="350px"
        />
        <p>{films.original_title}</p>
      </div>
      <Switch>
        <Route path="/cast">
          <Cast />
        </Route>
        {/* <Route path="/reviews">
          <Reviews />
        </Route> */}
      </Switch>
    </div>
  );
};

export default MovieDetailsPage;

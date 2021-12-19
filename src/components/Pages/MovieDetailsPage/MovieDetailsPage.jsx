import { useEffect, useState } from "react";
import { Route, useParams, Switch, Link } from "react-router-dom";

import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import { fetchFilmsId } from "../../../services/Api";

import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = ({ onCloseMovie }) => {
  const [films, setFilms] = useState(null);
  const [error, setError] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    const getMoviesById = async () => {
      try {
        const movies = await fetchFilmsId(movieId);

        setFilms(movies);
      } catch (error) {}
    };
    getMoviesById();
  }, [movieId]);

  return (
    films && (
      <div className={s.modal}>
        <div>
          <button type="button">Go back</button>
        </div>

        <div className={s.detailes_page}>
          <img
            src={`https://image.tmdb.org/t/p/w500${films.poster_path}`}
            alt=""
            width="350px"
            className={s.img}
          />

          <div className={s.page_overview}>
            <h2>{films.original_title || films.name}</h2>
            <p>User Score: {films.vote_average * 10} %</p>
            <h3>Overview</h3>
            <p>{films.overview}</p>
            <h3>Genres: </h3>
            <p>{films.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
        <p>Additional information</p>
        <div className="infomation">
          <ul>
            <li>
              <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/movies/:movieId/cast">
              <Cast />
            </Route>
            <Route path="/movies/:movieId/reviews">
              <Reviews />
            </Route>
          </Switch>
        </div>
      </div>
    )
  );
};

export default MovieDetailsPage;

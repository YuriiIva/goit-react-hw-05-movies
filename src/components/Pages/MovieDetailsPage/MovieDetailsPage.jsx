import { useEffect, useState } from "react";
import { Route, useParams, Switch, Link } from "react-router-dom";

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
      <div className={s.detailes_page}>
        <div>
          <button type="button">Go back</button>
          <img
            src={`https://image.tmdb.org/t/p/w500${films.poster_path}`}
            alt=""
            width="350px"
            className={s.img}
          />
        </div>
        <div className={s.page_overview}>
          <h2>{films.original_title}</h2>
          <p>User Score: </p>
          <h3>Overview</h3>
          <p>{films.overview}</p>
          <h3>Genres: </h3>
          {/* {films.genres.map((genre) => genre.name).join(" ")} */}
        </div>
      </div>
      <p>Additional information</p>
      <Switch>
        <Route path="/cast">
          <Link>
            <Cast />
          </Link>
        </Route>
        <Route path="/reviews">
          <Link>
            <Reviews />
          </Link>
        </Route>
      </Switch>
    </div>
  );
};

export default MovieDetailsPage;

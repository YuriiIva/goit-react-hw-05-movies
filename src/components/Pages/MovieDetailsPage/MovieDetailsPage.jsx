import { useEffect, useState, lazy, Suspense } from "react";
import {
  Route,
  useParams,
  Switch,
  NavLink,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";
import { fetchFilmsId } from "../../../services/Api";
import ErrorMsg from "../../common/ErrorMsg/ErrorMsg";
import Loader from "../../common/Loader/Loader";

import s from "./MovieDetailsPage.module.css";

const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

const MovieDetailsPage = ({ onCloseMovie }) => {
  const [films, setFilms] = useState(null);

  const { movieId } = useParams();
  const match = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    const getMoviesById = async () => {
      try {
        const movies = await fetchFilmsId(movieId);

        setFilms(movies);
      } catch (error) {
        ErrorMsg(error.message);
      }
    };
    getMoviesById();
  }, [movieId]);

  const handelGoBack = () => {
    history.goBack();
  };

  return (
    films && (
      <div className={s.modal}>
        <div>
          <button type="button" onClick={handelGoBack}>
            Go back
          </button>
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
        <hr />
        <p>Additional information</p>
        <div className="infomation">
          <ul>
            <li>
              <NavLink to={`${match.url}/cast`} activeClassName="active">
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/reviews`} activeClassName="active">
                Reviews
              </NavLink>
            </li>
          </ul>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path={`${match.path}/cast`}>
                <Cast />
              </Route>
              <Route path={`${match.path}/reviews`}>
                <Reviews />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    )
  );
};

export default MovieDetailsPage;

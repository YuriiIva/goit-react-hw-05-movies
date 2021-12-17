import { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import { fetchFilmsId } from "../../../services/Api";

import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = ({ onCloseMovie }) => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   try {
  //     const findIdFilm = fetchFilmsId(2108).then(setFilms);
  //     console.log(films);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //   }
  // }, [films]);

  return (
    <div className={s.modal}>
      {/* {films.map(({genres,original_title,poster_path})=> ( 
      <button type="button" >
        Go back
      </button> 
      
     <img src=`https://image.tmdb.org/t/p/w500${poster_path}` alt="" />
      <div>
        <div>
          <h1>{original_title}</h1>
          <p></p>
          <h2> </h2>
          <p></p>
          <h3></h3>
          <p></p>
        </div>
        <p></p>
      </div>
      ))} */}

      <Route path="/cast">
        <Cast />
      </Route>
      <Route path="/reviews">
        <Reviews />
      </Route>
    </div>
  );
};

export default MovieDetailsPage;

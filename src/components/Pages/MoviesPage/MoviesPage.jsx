import React from "react";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import { fetchSearchFilms } from "../../../services/Api";
// import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [serchMovie, setSerchMovie] = useState({});
  const [imputMovie, setImputMovie] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!imputMovie) return false;

    const getMovie = async () => {
      try {
        const movie = await fetchSearchFilms(imputMovie);
        setSerchMovie(movie);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [imputMovie]);

  const onInpuFilm = (e) => {
    e.preventDefault();
    // setImputMovie(e.target.value);
  };
  const handleChange = (e) => {
    setImputMovie(e.target.value);
  };
  return (
    <div>
      <form action="" className={s.form} onSubmit={onInpuFilm}>
        <input
          type="text"
          name=""
          id=""
          value={imputMovie}
          onChange={handleChange}
          autoFocus
          placeholder="Search movie"
        />
        <button type="submit" className={s.btn_search}>
          Search
        </button>
      </form>
    </div>
  );
};

export default MoviesPage;

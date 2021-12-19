import React from "react";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import { fetchSearchFilms } from "../../../services/Api";
// import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";
import s from "./MoviesPage.module.css";
import RenderList from "../../RenderList/RenderList";

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [serchMovie, setSerchMovie] = useState("");
  const [imputMovie, setImputMovie] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!serchMovie) return false;

    const getMovie = async () => {
      try {
        const movies = await fetchSearchFilms(serchMovie);

        setFilms([...movies.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [serchMovie]);

  const onInpuFilm = (e) => {
    e.preventDefault();
    setSerchMovie(imputMovie);
  };

  return (
    <div>
      <form action="" className={s.form} onSubmit={onInpuFilm}>
        <input
          type="text"
          name=""
          id=""
          value={imputMovie}
          onChange={(e) => setImputMovie(e.target.value)}
          autoFocus
          placeholder="Search movie"
        />
        <button type="submit" className={s.btn_search}>
          Search
        </button>
      </form>
      <RenderList films={films} />
    </div>
  );
};

export default MoviesPage;

import React from "react";
import { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

import { fetchSearchFilms } from "../../../services/Api";

import s from "./MoviesPage.module.css";
import RenderList from "../../RenderList/RenderList";
import ErrorMsg from "../../common/ErrorMsg/ErrorMsg";
import { toast } from "react-toastify";
const LOCAL_KEY = "searchMovie";

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [serchMovie, setSerchMovie] = useState("");
  const [imputMovie, setImputMovie] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [filmSave, setFilmSave] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (!serchMovie) return false;
    if (filmSave) {
      setSerchMovie(filmSave);
      setImputMovie(filmSave);
    }
    const getMovie = async () => {
      try {
        const movies = await fetchSearchFilms(serchMovie);
        if (movies.results.length === 0) {
          toast.error("Nothing found");
          return;
        }
        setFilmSave(localStorage.setItem(LOCAL_KEY, serchMovie));
        setFilms([...movies.results]);
      } catch (error) {
        ErrorMsg(error.message);
        history.replace("/movies");
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [filmSave, history, serchMovie]);

  useEffect(() => {
    const abs = localStorage.getItem(LOCAL_KEY);
    setFilmSave(abs);
    setSerchMovie(abs);
  }, []);

  const onInpuFilm = (e) => {
    e.preventDefault();
    if (imputMovie.trim() === "") {
      alert("Please, input your words");
      return;
    }
    setSerchMovie(imputMovie);

    reset();
  };

  const reset = () => {
    setImputMovie("");
  };

  const handleInput = (e) => {
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
          onChange={handleInput}
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

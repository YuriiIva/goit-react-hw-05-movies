import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../Pages/HomePage/HomePage";
import Header from "../common/Header/Header";
import Movies from "../Pages/MoviesPage/MoviesPage";
import NoFoundPage from "../Pages/NoFoundPage/NoFoundPage";
import MovieDetailsPage from "../Pages/MovieDetailsPage/MovieDetailsPage";
import Cast from "../Pages/MovieDetailsPage/Cast/Cast";

const App = () => {
  // const REQUESTS = {
  //   TRANDING: "/trending/movie/day",
  //   // SEARCH: '/search/movie',
  //   INFO: `/movie/${movieId}`,
  //   CREDITS: `/movie/${movieId}/credits`,
  //   REVIEWS: `/movie/${movieId}/reviews`,
  // };

  //   const onCloseMovie = () => {
  //     setIsMovieOpen(false);
  //   };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NoFoundPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

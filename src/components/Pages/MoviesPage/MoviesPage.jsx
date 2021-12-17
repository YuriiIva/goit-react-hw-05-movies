import React from "react";
import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";

import { Route } from "react-router-dom";

const MoviesPage = () => {
  return (
    <div>
      <Route path="/movies/:movieId">
        <MovieDetailsPage />
      </Route>
    </div>
  );
};

export default MoviesPage;

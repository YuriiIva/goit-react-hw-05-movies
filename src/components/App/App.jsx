import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../common/Loader/Loader";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import HomePage from "../Pages/HomePage/HomePage";
// import Header from "../common/Header/Header";
// import Movies from "../Pages/MoviesPage/MoviesPage";
// import NoFoundPage from "../Pages/NoFoundPage/NoFoundPage";
// import MovieDetailsPage from "../Pages/MovieDetailsPage/MovieDetailsPage";

const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));
const Header = lazy(() => import("../common/Header/Header"));
const Movies = lazy(() => import("../Pages/MoviesPage/MoviesPage"));
const NoFoundPage = lazy(() => import("../Pages/NoFoundPage/NoFoundPage"));
const MovieDetailsPage = lazy(() =>
  import("../Pages/MovieDetailsPage/MovieDetailsPage")
);

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default App;

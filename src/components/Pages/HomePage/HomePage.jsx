import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ films, openMovie, id }) => {
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {films.map(({ backdrop_path, original_title, id }) => (
          <li key={id} onClick={openMovie}>
            <img src={backdrop_path} alt="" width="100" />
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

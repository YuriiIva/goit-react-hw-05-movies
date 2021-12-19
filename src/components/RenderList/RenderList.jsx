import React from "react";
import { Link } from "react-router-dom";

const RenderList = ({ films }) => {
  return (
    <div>
      <ul>
        {films.map(({ title, id, name, original_name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{original_name || title || name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderList;

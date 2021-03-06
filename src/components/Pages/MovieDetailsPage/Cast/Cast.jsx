import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFilmsInf } from "../../../../services/Api";

import ErrorMsg from "../../../common/ErrorMsg/ErrorMsg";

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const castSearch = await fetchFilmsInf(movieId);

        setCasts([...castSearch.cast]);
      } catch (error) {
        ErrorMsg(error.message);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <div>
      {casts.map((cast) => (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path} `}
            alt=""
            width="70px"
          />
          <p>{cast.name}</p>
          <p>{cast.character}</p>
        </div>
      ))}
      {/* <Link to={`/movies/${movieId}/cast`}>Cast</Link> */}
    </div>
  );
};

export default Cast;

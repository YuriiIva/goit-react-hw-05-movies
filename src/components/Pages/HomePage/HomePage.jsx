import { fetchFilms } from "../../../services/Api";
import { useEffect, useState } from "react";
import RenderList from "../../RenderList/RenderList";

import ErrorMsg from "../../common/ErrorMsg/ErrorMsg";

const HomePage = () => {
  const [films, setFilms] = useState([]);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMovieOpen, setIsMovieOpen] = useState(false);

  useEffect(() => {
    const getFilms = async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchFilms();
        setFilms([...results]);
      } catch (error) {
        ErrorMsg(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getFilms();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <RenderList films={films} />
    </div>
  );
};

export default HomePage;

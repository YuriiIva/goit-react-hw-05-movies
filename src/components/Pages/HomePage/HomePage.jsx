import { fetchFilms } from "../../../services/Api";
import { useEffect, useState } from "react";
import RenderList from "../../RenderList/RenderList";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [movieId, setMovieId] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMovieOpen, setIsMovieOpen] = useState(false);

  useEffect(() => {
    const getFilms = async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchFilms();
        setFilms([...results]);
        console.log(results);
      } catch (error) {
        setError(error.message);
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

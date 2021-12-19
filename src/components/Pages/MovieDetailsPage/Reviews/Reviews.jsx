import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { fetchFilmsRew } from "../../../../services/Api";

const Reviews = () => {
  const [reviewers, setReviewers] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    console.log("movieIdAAA", movieId);
    const getRewiewers = async () => {
      try {
        const rewiewersSearch = await fetchFilmsRew(movieId);
        console.log("rewiewersSearch", rewiewersSearch.results);
        setReviewers([...rewiewersSearch.results]);
      } catch (error) {}
    };
    getRewiewers();
  }, [movieId]);

  return (
    <div>
      {reviewers.map((reviewer) => (
        <div>
          <h4>Author: {reviewer.author}</h4>
          <p>{reviewer.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;

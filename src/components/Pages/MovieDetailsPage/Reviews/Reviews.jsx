import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { fetchFilmsRew } from "../../../../services/Api";
import ErrorMsg from "../../../common/ErrorMsg/ErrorMsg";

const Reviews = () => {
  const [reviewers, setReviewers] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getRewiewers = async () => {
      try {
        const rewiewersSearch = await fetchFilmsRew(movieId);

        setReviewers([...rewiewersSearch.results]);
      } catch (error) {
        ErrorMsg(error.message);
      }
    };
    getRewiewers();
  }, [movieId]);

  return (
    <div>
      {(!reviewers.length && <p>We don't have any reviews for this movie</p>) ||
        reviewers.map((reviewer) => (
          <div>
            <h4>Author: {reviewer.author}</h4>
            <p>{reviewer.content}</p>
          </div>
        ))}
    </div>
  );
};

export default Reviews;

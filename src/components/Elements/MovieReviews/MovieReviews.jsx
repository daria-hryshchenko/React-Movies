import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { nanoid } from 'nanoid';
import { requestReviewsById } from 'api/api';
import Loader from 'components/Elements/Loader/Loader';

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    requestReviewsById(movieId)
      .then(data => {
        setReviews(data.results);
        // console.log(data.results);
      })
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map(({ author, content, index }) => {
          return (
            <ul key={nanoid()}>
              <li>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            </ul>
          );
        })
      ) : (
        <div>There is no reviews on this film</div>
      )}
      {loading && <Loader />}
      {error && <div>Oops, some error occured... Message:{error}</div>}
    </div>
  );
}

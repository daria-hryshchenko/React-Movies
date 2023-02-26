import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { nanoid } from 'nanoid';
import { requestReviewsById } from 'api/api';
import Loader from 'components/Elements/Loader/Loader';
import {
  NoFilmMessage,
  ReviewSection,
  ReviewList,
  ReviewItem,
  ReviewTitle,
  ReviewContent,
} from './MovieReview.styled';

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
    <ReviewSection>
      {reviews.length > 0 ? (
        reviews.map(({ author, content, index }) => {
          return (
            <ReviewList key={nanoid()}>
              <ReviewItem>
                <ReviewTitle>Author: {author}</ReviewTitle>
                <ReviewContent>{content}</ReviewContent>
              </ReviewItem>
            </ReviewList>
          );
        })
      ) : (
        <NoFilmMessage>There is no reviews on this film</NoFilmMessage>
      )}
      {loading && <Loader />}
      {error && <div>Oops, some error occured... Message:{error}</div>}
    </ReviewSection>
  );
}

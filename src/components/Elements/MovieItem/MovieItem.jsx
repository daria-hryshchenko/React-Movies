import { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router';
import { requestMoviesById } from 'api/api';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import { MovieCardSection, MovieCard, ErrorMessage } from './MovieItem.Styled';
import Loader from 'components/Elements/Loader/Loader';

export default function MovieItem() {
  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300/';

  useEffect(() => {
    setLoading(true);
    requestMoviesById(movieId)
      .then(data => {
        setMovie(data);
        // console.log(data);
      })
      .catch(error => setError(error.message))
      .finally(setLoading(false));

    // async function getMovie(movieId) {
    //   try {
    //     setLoading(true);
    //     const data = await requestMoviesById(movieId);
    //     setMovie(data.results);
    //     console.log(data.results);
    //   } catch (error) {
    //     setError(error.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // getMovie();
  }, [movieId]);

  const genres = movie?.genres?.map(genre => genre.name).join(' ');

  return (
    <MovieCardSection>
      <NavLink to={location.state ?? '/'}>🡐 Go back</NavLink>
      {loading && <Loader />}
      {movie !== null && (
        <MovieCard movie={movie}>
          <ul>
            <li>
              <img
                src={`${BASE_IMG_URL}${movie.poster_path}`}
                alt={movie.title}
              />
            </li>
            <li>
              <h1>
                {movie.title}({movie.release_date.slice(0, 4)})
              </h1>
              <p>User csore: {Math.round(Number(movie.vote_average) * 10)}%</p>
              <h2>Owerview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              <p>{genres}</p>
            </li>
          </ul>
          <hr />
          <h2>Addition information</h2>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </MovieCard>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {error && (
        <ErrorMessage>Oops, some error occured... Message:{error}</ErrorMessage>
      )}
    </MovieCardSection>
  );
}

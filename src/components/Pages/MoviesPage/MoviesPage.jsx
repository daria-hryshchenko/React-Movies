import { useState, useEffect } from 'react';
import { requestSeachById } from 'api/api';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import Loader from 'components/Elements/Loader/Loader';

export default function MoviesPage() {
  const [seach, setSearch] = useSearchParams();
  const [moviesList, setMoviesList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const movieToSearch = seach.get('movie');
  const location = useLocation();

  useEffect(() => {
    if (movieToSearch === null) return;
    setLoading(true);
    requestSeachById(movieToSearch)
      .then(event => {
        setMoviesList(event);
        if (event.length === 0) {
          alert('Movie not found. Please try again.');
        }
      })
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, [movieToSearch]);

  const onHandleSubmit = event => {
    event.preventDefault();

    const { value } = event.target.elements.movie;
    setSearch({ movie: value });

    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input type="text" placeholder="input movie name" name="movie" />
        <button type="submit">Search</button>
      </form>
      {moviesList !== null && (
        <ul>
          {moviesList.map(({ id, original_title }) => (
            <li key={id}>
              <NavLink to={`/movies/${id}`} state={location}>
                {original_title}{' '}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      {loading && <Loader />}
      {error && <div>Oops, some error occured... Message:{error}</div>}
    </div>
  );
}

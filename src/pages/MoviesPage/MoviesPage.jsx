import { useState, useEffect } from 'react';
import { requestSeachById } from 'api/api';
import { useSearchParams, useLocation } from 'react-router-dom';
import {
  Container,
  FormSeach,
  Input,
  ButtonSeach,
  MovieList,
  LinkToMovie,
  NavLinkMovie,
} from './MoviesPage.styled';
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
    <Container>
      <FormSeach onSubmit={onHandleSubmit}>
        <Input type="text" placeholder="input movie name" name="movie" />
        <ButtonSeach type="submit">Search</ButtonSeach>
      </FormSeach>
      {moviesList !== null && (
        <MovieList>
          {moviesList.map(({ id, original_title }) => (
            <LinkToMovie key={id}>
              <NavLinkMovie to={`/movies/${id}`} state={location}>
                {original_title}{' '}
              </NavLinkMovie>
            </LinkToMovie>
          ))}
        </MovieList>
      )}
      {loading && <Loader />}
      {error && <div>Oops, some error occured... Message:{error}</div>}
    </Container>
  );
}

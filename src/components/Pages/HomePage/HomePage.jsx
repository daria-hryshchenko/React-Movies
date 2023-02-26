import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { requestMovies } from 'api/api';
import Loader from 'components/Elements/Loader/Loader';
import {
  HomePageSection,
  TrendsList,
  TrendItem,
  TrendTitle,
  ErrorMessage,
} from './HomePage.Styled';

export default function HomePage() {
  const location = useLocation();
  // console.log(location);

  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const data = await requestMovies();
        setMovies(data.results);
        // console.log(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <HomePageSection>
      <TrendsList>
        {isLoading && <Loader />}
        <TrendTitle>Trending Today</TrendTitle>
        {movies !== null &&
          movies.map(({ title, id }) => {
            return (
              <TrendItem key={id}>
                <NavLink to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </NavLink>
              </TrendItem>
            );
          })}
        {error && (
          <ErrorMessage>
            Oops, some error occured... Message:{error}
          </ErrorMessage>
        )}
      </TrendsList>
    </HomePageSection>
  );
}

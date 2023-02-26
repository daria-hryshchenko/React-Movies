import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import MovieReviews from 'components/Elements/MovieReviews/MovieReviews';
import MoviesPage from './Pages/MoviesPage/MoviesPage';
import MovieItem from './../components/Elements/MovieItem/MovieItem';
import { StyledNavLink, Navigation } from './App.styled';
import MovieCast from 'components/Elements/MovieCast/MovieCast';

export const App = () => {
  return (
    <section>
      <Navigation>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Navigation>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieItem />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>

        <Route path="*" element={<div>Page not found </div>} />
      </Routes>
    </section>
  );
};

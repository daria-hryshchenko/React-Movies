import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import HeaderNavigation from './HeaderNavigation';
import Loader from './Elements/Loader/Loader';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = React.lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieInfo = React.lazy(() => import('../pages/MovieInfo/MovieInfo'));
const MovieCast = React.lazy(() =>
  import('components/Elements/MovieCast/MovieCast')
);
const MovieReviews = React.lazy(() =>
  import('components/Elements/MovieReviews/MovieReviews')
);

export const App = () => {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HeaderNavigation />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieInfo />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<div>Page not found </div>} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};

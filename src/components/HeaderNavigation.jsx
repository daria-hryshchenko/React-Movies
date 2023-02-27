import { Outlet } from 'react-router-dom';
import { StyledNavLink, Navigation } from './App.styled';

export default function HeaderNavigation() {
  return (
    <header>
      <Navigation>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Navigation>
      <Outlet />
    </header>
  );
}

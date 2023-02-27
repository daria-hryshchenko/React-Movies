import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieCardSection = styled.section`
  margin: 20px 20px;
  padding: 0;
`;

export const BackButton = styled.button`
  border: none;
  background: transparent;
  padding: 20px;
`;

export const MovieCard = styled.div``;

export const ErrorMessage = styled.p``;

export const NavLinkCard = styled(NavLink)`
  text-decoration: none;
  color: #1f85cf;
`;

export const MovieList = styled.ul`
  display: flex;
  gap: 30px;
  margin: 0 auto;
  padding: 30px;
  list-style: none;
`;

export const MoviesItem = styled.li``;

export const MovieTitle = styled.h1`
  color: #1f85cf;
`;

export const AdditionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  color: #1f85cf;
`;

export const AdditionItem = styled.li`
  color: #1f85cf;
`;

export const AdditionTitle = styled.h2`
  font-size: 24px;
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomePageSection = styled.section`
  margin: 0;
  padding: 0;
`;

export const TrendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding: 30px;
  color: #1f85cf;
`;

export const TrendItem = styled.li`
  color: #1f85cf;
`;

export const TrendTitle = styled.h2`
  color: #1f85cf;
`;

export const ErrorMessage = styled.p``;

export const NavLinkPage = styled(NavLink)`
  text-decoration: none;
  color: #1f85cf;
`;

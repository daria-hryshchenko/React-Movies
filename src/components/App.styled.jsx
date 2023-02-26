import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav``;
export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding: 15px;
  transition: all 0.3s;
  color: black;
  &.active {
    color: blue;
    border-bottom: 2px solid blue;
  }
`;

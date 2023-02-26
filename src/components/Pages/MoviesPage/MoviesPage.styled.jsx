import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding: 30px;
  justify-content: center;
  align-items: center;
`;

export const FormSeach = styled.form`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  border: 1px solid #1f85cf;
  border-radius: 10px;
  padding: 5px 10px;
`;

export const ButtonSeach = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #1f85cf;
  padding: 5px 10px;
  color: #fff;

  &:hover {
    color: #1f85cf;
    background-color: #fff;
    border: 1px solid #1f85cf;
  }
`;

export const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LinkToMovie = styled.li`
  color: #1f85cf;
`;

export const NavLinkMovie = styled(NavLink)`
  color: #1f85cf;
  text-decoration: none;
`;

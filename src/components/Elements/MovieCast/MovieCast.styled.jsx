import styled from 'styled-components';

export const CastSection = styled.div`
  margin: 0;
  padding: 0;
`;

export const CastList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
`;

export const CastItem = styled.li``;

export const CastName = styled.h3`
  color: #1f85cf;
`;

export const CastCharacter = styled.p`
  font-weight: 500;
`;

export const NoCastMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  margin: 20px 20px 100px;
  font-weight: bold;
`;

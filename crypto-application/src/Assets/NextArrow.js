import React from 'react';
import styled from 'styled-components';

const Container = styled.svg`
  cursor: pointer;
`;

const NextArrow = ({ color, onClick }) => (
  <Container
    xmlns='http://www.w3.org/2000/svg'
    width='30'
    height='30'
    viewBox='0 0 24 24'
    onClick={onClick}
  >
    <polygon
      fill={color ? color : ''}
      points='7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707'
    />
  </Container>
);

export default NextArrow;

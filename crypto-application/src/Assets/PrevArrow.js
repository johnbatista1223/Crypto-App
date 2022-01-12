import React from 'react';
import styled from 'styled-components';

const Container = styled.svg`
  cursor: pointer;
`;

const PrevArrow = ({ color, onClick }) => {
  return (
    <Container
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='30'
      viewBox='0 0 24 24'
      onClick={onClick}
    >
      <polygon
        fill={color ? color : ''}
        points='15.293 3.293 6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293'
      />
    </Container>
  );
};

export default PrevArrow;

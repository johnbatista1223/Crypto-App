import React from 'react'
import styled from 'styled-components'
import NextArrow from '../Assets/NextArrow'
import PrevArrow from '../Assets/PrevArrow'
import { Link } from "react-router-dom"

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  position: absolute;
  right:140px;
  margin-bottom:55px;
`;

const List = styled.li`
  list-style: none;
  display: inline-block;
  margin: 5px;
`;

const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Container>
      <ul>
        <PrevArrow
          color='#81cdba'
          onClick={() => {
            if (currentPage !== 1) {
              paginate(currentPage - 1);
            }
          }}
        />
        {pageNumbers.map((number) => (
          <List key={number}>
            <Link
              style={{
                color: ' #000000',
                fontFamily: 'Roboto',
                fontSize: '13px',
              }}
              onClick={() => paginate(number)}
            >
              {number}
            </Link>
          </List>
        ))}
        <NextArrow
          color='#81cdba'
          onClick={() => {
            if (pageNumbers.length !== currentPage) {
              paginate(currentPage + 1);
            }
          }}
        />
      </ul>
    </Container>
  );
};

export default Pagination

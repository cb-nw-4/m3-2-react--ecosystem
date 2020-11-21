import React from 'react';
import styled from 'styled-components';
import { items } from '../data'
import ListingGrid from './ListingGrid';

const BoldStyle = styled.b`
  font-weight: bold;
`;

const Home = () => {
  return (
    <>
      <p>
        Fruit emporium sells the finest fruits from this world and beyond.
      </p>
      <p>
        <BoldStyle>Browse items:</BoldStyle>
      </p>
      <ListingGrid itemList={Object.values(items)} />
    </>
  );
};

export default Home;
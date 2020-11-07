import React from 'react';

import styled from "styled-components";

import ListingGrid from './ListingGrid';

import { items } from "../data";

let Wrapper = styled.div`
  margin: 0 15%;
  padding: auto;
  & p {
    text-align: left;
  }
`;

let Food = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;


const Home = (props) => {
  return (
  <Wrapper>
    <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
    <p><strong>Browse items:</strong></p>
    <Food>
      {Object.values(items).map((item) => {
              return <ListingGrid itemList={item} />;
            })}
    </Food>
  </Wrapper>
  );
};


export default Home;



import React from 'react';
import styled from 'styled-components';
import ListingGrid from './ListingGrid.js'
import data, { items } from '../data.js'

const Intro = styled.p`
   font-weight: 700;
`;

const Browse = styled.p`
   font-weight: 900;
`;

const Homepage = () => {

   let itemArray = Object.values(items);
   return (
   <div>
      <Intro>Fruit emporium sells the finest fruits from this world and beyond.</Intro>
      <Browse>Browse items:</Browse>
      <ListingGrid itemList={itemArray}/>
   </div>);

};

export default Homepage;
import React from 'react';
import styled from 'styled-components';
import ListingGrid from './ListingGrid.js'
import { items } from '../data.js'

const Intro = styled.p`
   font-size: 1.5rem;
   font-weight: 600;
   margin-bottom: 2rem;
   margin-top: 0;
`;

const Browse = styled.p`
   font-size: 1.5rem;
   font-weight: 800;
   margin-bottom: 80px;
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
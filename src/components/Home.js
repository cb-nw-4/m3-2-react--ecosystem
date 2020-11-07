import React from "react"; 
import ItemList from './ItemList';
import {items} from '../data'; 
import ListingGrid from "./ListingGrid"; 
import styled from 'styled-components';
const Home = () => { 
 
  return (
    <div>
      <p>
        Fruit emporium sells the finest fruits from this world and beyond.
        Browse items:
      </p> 
      <FruitWrapper> 
          <ListingGrid itemArray={Object.values(items)}  />
      </FruitWrapper>
    </div>
  );
};
 
const FruitWrapper = styled.div`
display:flex; 
justify-content: space-around; 
flex-wrap:wrap; 


`

export default Home;

import React from 'react'; 
import styled from 'styled-components'; 
import ListingGrid from './ListingGrid';
import {items} from '../data';

const Home = styled.div`
margin-left:50px;
`;

const Homepage = () => {
    return (
        <Home>
            Fruit emporium sells the finest fruits from this world and beyond.
            <h3><strong>Browse items:</strong></h3>
            <ListingGrid itemList={Object.values(items)}/> 
        </Home>
    ); 
}; 

export default Homepage; 
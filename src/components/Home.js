import React from 'react';
import styled from 'styled-components';
import ListingGrid from './ListingGrid';
import { items } from '../data';

const Div = styled.div`
    font-size: 15px;
    margin: 0 50px;

    & span {
        font-weight: bold;
    }
`;

const Home = () => {
    let array = Object.values(items);
    console.log(array)
    return (
        <Div>
            <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
            <p><span>Browse items:</span></p>
            <ListingGrid itemList={array}/>
        </Div>
    )
  };
  

export default Home;
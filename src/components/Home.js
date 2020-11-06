import React from 'react';
import { items } from '../data';

import ListingGrid from './ListingGrid';

import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    display: inline-block;
`

const Home = (props) => {
    return (
        <Container>
            <p>Fruit emporium sells the finest fruits from this world and beyond.

            Browse items:</p>

            <ListingGrid itemList = {Object.values(items)}/>
        </Container>
    )
}




export default Home;
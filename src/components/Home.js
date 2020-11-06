import React from 'react';

import { items } from '../data';

import ListingGrid from './ListingGrid';

import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    display: inline-block;
`

const HomeText = styled.p` 
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    margin: 20px;
`

const Home = (props) => {
    return (
        <Container>
            <HomeText>Fruit emporium sells the finest fruits from this world and beyond.

            Browse items:</HomeText>

            <ListingGrid itemList = {Object.values(items)}/>
        </Container>
    )
}


export default Home;

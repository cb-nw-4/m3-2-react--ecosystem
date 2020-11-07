import React from 'react';

import ListingGrid from './ListingGrid.js';

import { items } from '../data';

import styled from 'styled-components';

const HomepageContainer = styled.div`
    position: relative; 
    top: 60px;
    left: 10px;
`;

const HomepageContent = styled.p`
    position: relative;
    top: 40px;
    left: 25px;
    font-family: sans-serif;
`;

const Homepage = () => {
    return (
        <HomepageContainer>
            <HomepageContent>Fruit emporium sells the finest fruit from this world and beyond.</HomepageContent>
            <HomepageContent><strong>Browse items:</strong></HomepageContent>
            <ListingGrid fruits={Object.values(items)}/>
        </HomepageContainer>
    )
}






export default Homepage;
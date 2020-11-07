import React from 'react';
import styled from 'styled-components';

import { items } from '../data';
import ListingGrid from './ListingGrid';


const Paragraph = styled.p`
    position: relative;
    font-size: 28px;
    margin: 50px 80px 40px 80px;
`;

const Homepage = () => {
    return (
        <>
        <Paragraph>Fruit emporium sells the finest fruits from this world and beyond.</Paragraph>
        <Paragraph><strong>Browse items:</strong></Paragraph>
        <ListingGrid 
            itemList = {Object.values(items)}
        />
        </>
    );
    
}

export default Homepage;
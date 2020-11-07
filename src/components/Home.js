import React from 'react';
import ListingGrid from './ListingGrid.js';
import styled from 'styled-components';


const Div = styled.div`
    & p, span {
        font-size: 1.5em;
    }
    & span {
        font-weight: bold;
    }
`;

const Home = ({items}) => {
    return (
        <Div>
        <p>Fruit emporium sells the finest fruits from this world and beyond.</p><br></br>
        <span>Browse items:</span>
        <ListingGrid itemList={Object.values(items)}/>
        </Div>
    );
}

export default Home;
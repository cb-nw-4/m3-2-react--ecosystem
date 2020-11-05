import React from 'react';
import ListingGrid from './ListingGrid.js';

const Home = ({items}) => {
    return (
        <>
        <p>
            Fruit emporium sells the finest fruits from this world and beyond.

            Browse items:
        </p>
        <ListingGrid itemList={Object.values(items)}/>
        </>
    );
}

export default Home;
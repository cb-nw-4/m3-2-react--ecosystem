import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { items } from '../data.js'
import ListingGrid from './ListingGrid.js'

const Home=()=>{
    return(
        <div>
            <p>Fruit emporium sells the finest fruits from this world and beyond.
                <br/>
            Browse items:
            </p>
        
            <ListingGrid itemList={Object.values(items)}/>
        </div>
    );
    
}

export default Home;
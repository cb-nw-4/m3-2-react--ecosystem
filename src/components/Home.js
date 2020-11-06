import React from 'react';
import styled from 'styled-components';
import { items } from '../data.js'
import ListingGrid from './ListingGrid.js'

const Home=()=>{
    return(
        <div>
            <Paragraph>Fruit emporium sells the finest fruits from this world and beyond.
                <br/>
            <p><strong>Browse items:</strong></p>
            </Paragraph>
        
            <ListingGrid itemList={Object.values(items)}/>
        </div>
    );
    
}

const Paragraph=styled.p`
    padding:10px 0px 0px 0px;
    &>p{
        margin-top:20px;
    }
    font-size: 18px;
`;

export default Home;
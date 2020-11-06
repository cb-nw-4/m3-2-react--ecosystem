import React from 'react';
import styled from 'styled-components';
import ListingGrid from './ListingGrid';
import { items, sellers } from '../data';



const DivContainer = styled.div`
    margin: 20px;

    & h2{
        margin: 50px 10px 20px 10px;
    }
`


const Paragraph = styled.p`
    padding: 10px;
    margin: 10px;
    font-size: 24px;

    
`

const HomePage = (props)=>{
    return (
        <DivContainer>
            <Paragraph>
            Fruit emporium sells the finest fruits from this world and beyond.
            </Paragraph>
            <h2>Browse items :</h2>
            <ListingGrid  itemList= {items} sellerList={sellers}/>
            
        </DivContainer>
    )

}

export default HomePage;


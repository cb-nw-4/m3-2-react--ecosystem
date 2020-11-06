import React from 'react'; 
import styled from 'styled-components'; 
import { items } from '../data';
import ListingGrid from './ListingGrid';


const HomeDiv = styled.div`
p { 
    font-size: 15px ; 
    & strong { 
        font-size: 15px;
    }; 
`

const Homepage = (props) => {
    // console.log(props,"Homepage props");
    return (
        <HomeDiv>
            <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
            <p><strong>Browse items:</strong></p>
            <ListingGrid itemList={Object.values(items)}/>
        </HomeDiv>
    ); 
}; 

export default Homepage;
import React from "react";  
import {sellers} from "../data";
import SellersGrid from './SellersGrid'; 
import styled from 'styled-components';

const About = () => {
  return (
    <div>
      <p>
        Fruit emporium is founded on a very simple principle: Fruit is good. We
        carry the finest selection of produce from around the world, from tart
        citrus to sweet cherries. Our sellers are world-class, and your fruit is
        guaranteed to be worthy of auction in Asian markets.
      </p> 
      <Title>Our Sellers</Title>
      <Wrapper>
        <SellersGrid sellersArray = {Object.values(sellers)} />
      </Wrapper>
    </div>
  );
}; 
  
const Title = styled.h2`  
margin-top:20px; 
text-decoration:underline;
text-align:center;
`
const Wrapper = styled.div` 
display:flex; 
justify-content:space-around;
`
export default About;

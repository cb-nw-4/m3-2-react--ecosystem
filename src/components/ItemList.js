import React from "react";
import { sellers, items } from "../data";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemList = (item) => {
  return (
    <FruitDiv key={items.id}>
      <FruitLink to={items.id}>
        <FruitImage src={item.imageSrc}></FruitImage>
        <FruitName>{item.name}</FruitName>
        <FruitLatinName>{item.latinName}</FruitLatinName>
      </FruitLink>
    </FruitDiv>
  );
};

const FruitDiv = styled.div`
  margin-top: 30px;
  width: 300px;
  padding: 10px;
  text-align: center;
  border: 2px solid lightgray;
  border-radius: 10px;
  margin-bottom: 30px; 
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;
 
const FruitLink = styled(Link)`
text-decoration:none;
`
const FruitName = styled.h2`
  color: black; 
  text-decoration:underline;
`;
const FruitImage = styled.img`  
z-index:2;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); 
margin-top:-30px;
  width: 200px;
  border-radius: 20px;
`;
const FruitLatinName = styled.h4`
  color: lightslategrey; 
  font-style:oblique;
  text-decoration: none;
`;

export default ItemList;

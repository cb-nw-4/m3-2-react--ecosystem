import React from 'react';

import { items } from '../data';

import { sellers } from '../data';

import { useParams } from "react-router-dom";

import styled from 'styled-components';

const Container = styled.section`
    position: relative;
    left: 0;
    right: 0;
    top: 150px;
    margin-left: auto;
    margin-right: auto;
    width: 900px;
`;

const Image = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 15%;
`;

const FruitName = styled.h3`
    position: absolute;
    left: 48%;
    top: 2%;
    font-family: sans-serif;
    font-size: 24pt;
`;

const FruitLatinName = styled.h4`
    position: absolute;
    left: 48%;
    top: 10%;
    font-family: sans-serif;
    font-size: 18pt;
    color: grey;
`;

const Description = styled.p`
    position: absolute;
    left: 48%;
    top: 30%;
    font-family: sans-serif;
    font-size: 14pt;
`;

const CountryOfOrigin = styled(FruitLatinName)`
    top: 50%;
    font-size: 12pt;
`;

const Button = styled.button`
    position: absolute;
    left: 48%;
    top: 65%;
    border-radius: 20px;
    border: none;
    padding: 15px;
    background-color: #9933ff;
    color: white;
    text-align: center;
    font-size: 12pt;
`;

const SellerContainer = styled.div`
    position: absolute;
    top: 80%;
    left: 48%;
    width: 400px;
`;

const SellerImage = styled.img`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const SellerName = styled.p`
    position: absolute;
    display: inline-block;
    left: 15%;
    font-weight: bold;
    font-family: sans-serif;
`;

const ItemDetails = () => {
  const { itemId } = useParams();
  const item = items[itemId];
  const seller = item['sellerId'];
  return (
        <Container>
            <Image src={item.imageSrc} alt="fruitPicture"/>
            <FruitName>{item.name}</FruitName>
            <FruitLatinName>{item.latinName}</FruitLatinName>
            <Description>{item.description}</Description>
            <CountryOfOrigin>Product of {item.countryOfOrigin}</CountryOfOrigin>
            <Button>$ {item.price} - Buy now</Button>
            <SellerContainer>
                <SellerImage src={sellers[seller]['avatarSrc']} alt="sellerPic"/>
                <SellerName>Sold by: {sellers[seller]['storeName']}</SellerName>
            </SellerContainer>
        </Container>
        )
}




export default ItemDetails;
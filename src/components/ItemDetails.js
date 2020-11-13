import React from 'react';
import styled from 'styled-components';
import { sellers, items } from '../data.js';
import { useParams } from "react-router-dom";



const Info= styled.div`
    width:500px;
    margin-left:50px;
`;
const ImageStyle= styled.img`
    width: 450px;
    height: 450px;
    border-radius: 20px;
`;
const Name= styled.p`
    font-size: 2.5rem;
    font-weight: 900;
    margin: 0;
`;
const LatinName= styled.p`
    margin:0;
    margin-bottom: 2.75rem;
    font-style: italic;
    font-size: 1.4rem;
    color: #A8A8A8;
    font-weight:600;
`;
const Button= styled.button`
    background-color: #4700E0;
    border-radius: 15px;
    color: white;
    font-size: 1.5rem;
    font-family:inherit;
    font-weight: 600;
    display: block;
    padding: 1.25rem 0;
    margin: 2rem 0;
    width: 320px;
`;
const SoldOut= styled.p`
    color: red;
    font-weight: 800;
    font-size: 1.5rem;
    font-style: italic;
`;
const Origin = styled.p`
    font-style: italic;
`;
const SellerImage= styled.img`
    width: 54px;
    height: 54px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
`;
const SellerStore= styled.p`
    display: inline-block;
    vertical-align: middle;
    padding: 0 14px;
`;



const ItemDetails = () => {
    console.log("SellerImage")
    const { itemId } = useParams();
    let item = items[itemId];
    let seller = sellers[item.sellerId]



    return (
        
            <Info>
                <ImageStyle src = {item.imageSrc} />
            
                <Name>{item.name}</Name>
                <LatinName>{item.latinName}</LatinName>
                <p>{item.description}</p>
                <Origin>Product of:{item.countryOfOrigin}</Origin>
                {item.quantity > 0 ? <Button>${item.price} - Buy now</Button> : <SoldOut>Out of stock</SoldOut>}
                <SellerImage src = {seller.avatarSrc} />
                <SellerStore>Sold by:{seller.storeName}</SellerStore>
            </Info>
        
    );
};

export default ItemDetails; 
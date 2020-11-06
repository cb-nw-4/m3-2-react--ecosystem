import React from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { items, sellers } from '../data.js'

const ItemCard = styled.div`
    margin-top:0;
    display: flex;
    font-size: 1.25rem;
    font-weight: 700;
`;

const ItemInfo = styled.div`
    margin-left: 60px;
    max-width: 700px;
`;

const StyleImg = styled.img`
    width: 450px;
    height: 450px;
    border-radius: 20px;
`;

const ItemName = styled.p`
    font-size: 2.5rem;
    font-weight: 900;
    margin: 0;
`;

const LatName = styled.p`
    margin:0;
    margin-bottom: 2.75rem;
    font-style: italic;
    font-size: 1.4rem;
    color: #A8A8A8;
    font-weight:600;
`;

const BuyButton = styled.button`
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

const SoldOut = styled.p`
    color: red;
    font-weight: 800;
    font-size: 1.5rem;
    font-style: italic;
`;

const Product = styled.p`
    font-style: italic;
`;

const SellerAvatar = styled.img`
    width: 54px;
    height: 54px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
`;

const SellerShop = styled.p`
    display: inline-block;
    vertical-align: middle;
    padding: 0 14px;
`;

const Em = styled.p`
    display: inline;
    font-weight: 900;
    `;


const ItemDetails = () => {
    const { itemId } = useParams();
    let item = items[itemId];
    let seller = sellers[item.sellerId];

    return (
        <ItemCard>
            <StyleImg src={item.imageSrc}/>
            <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <LatName>{item.latinName}</LatName>
                <p>{item.description}</p>
                <Product>Product of: <Em>{item.countryOfOrigin}</Em></Product>
                {item.quantity > 0? <BuyButton>${item.price} - Buy now</BuyButton>:<SoldOut>Out of stock</SoldOut>}
                <SellerAvatar src={seller.avatarSrc}/>
                <SellerShop>Sold by: <Em>{seller.storeName}</Em></SellerShop>
                
            </ItemInfo>
        </ItemCard>
    );

};

export default ItemDetails;
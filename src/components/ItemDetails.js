import React from 'react';

import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { items, sellers } from '../data';

const ItemDetailsContainer = styled.div`
    display: flex;
    margin: 100px 80px;
`;

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ItemImage = styled.img`
    height: 500px;
    width: 500px;
    border-radius: 30px;
    margin-right: 80px;
`;

const ItemName = styled.h2`
    font-size: 50px;
    margin: 10px 0;
    color: black;
`;

const ItemLatinName = styled.h3`
    font-size: 25px;
    margin: 10px 0;
    font-weight: normal;
    color: gray;
`;

const ItemDescription = styled.p`
    font-size: 20px;
`;

const ItemFrom = styled.span`
    font-size: 20px;
    margin-bottom: 35px;
`;

const Button = styled.button`
    width: 325px;
    background-color: rgb(65, 6, 203);
    border: none;
    border-radius: 20px;
    color: white;
    font-size: 28px;
    padding: 25px;
`;

const NoStock = styled.p`
    font-size: 20px;
`;

const SellerInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 35px;
`;

const SellerImage = styled.img`
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
`;

const SellerName = styled.span`
    font-size: 20px;
`;

const ItemDetails = () => {
    const { itemID } = useParams();
    const getObj = items[itemID];
    const sellerObj = sellers[getObj.sellerId];
    return (
        <ItemDetailsContainer>
        <ItemImage src={getObj.imageSrc} alt='item'/>
        <ItemInfo>
            <ItemName>{getObj.name}</ItemName>
            <ItemLatinName><i>{getObj.latinName}</i></ItemLatinName>
            <ItemDescription>{getObj.description}</ItemDescription>
            <ItemFrom><i>Product of <strong>{getObj.countryOfOrigin}</strong></i></ItemFrom>
            {getObj.quantity !== 0 ? <Button>{`$${getObj.price} - Buy now`}</Button> : <NoStock><strong>Out of Stock</strong></NoStock>}
            <SellerInfo>
                <SellerImage src={sellerObj.avatarSrc} alt='seller avatar'/>
                <SellerName>Sold by: <strong>{sellerObj.storeName}</strong></SellerName>
            </SellerInfo>
        </ItemInfo>
        </ItemDetailsContainer>
    );
}

export default ItemDetails;
import React from 'react';

import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { items, sellers } from '../data';

const SellerContainer = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-content: center;
`;

const SellerImage = styled.img`
    height: 80px;
    border-radius: 50px;
    margin-right: 20px;
`;

const StoreName = styled.h2`
    font-size: 35px;
    color: darkgray;
`;

const Grid = styled.section`
    display: grid;
    grid-gap: 80px;
    grid-template-columns: auto auto auto;
    justify-content: center;
    margin: 100px 0;
`;

const ItemContainerLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 10px 18px lightgray;
    border-radius: 20px;
    width: 250px;
    text-decoration: none;

    &:hover {
        transform: scale(1.1);
        transition: transform 0.5s;
    }
`;

const ItemImage = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 20px;
    margin-top: 20px;
`;

const ItemName = styled.h3`
    font-size: 30px;
    margin: 10px 0;
    color: black;
`;

const ItemLatinName = styled.h4`
    font-size: 20px;
    margin: 10px 0;
    font-weight: normal;
    color: gray;
`;

const Dots = styled.div`
    height: 8px;
    width: 80px;
    background-color: lightgray;
    border-radius: 50%;
`;

const SellerDetails = () => {
    const { sellerID } = useParams();
    const itemList = Object.values(items);
    const seller = sellers[sellerID];
    return (
        <>
        <SellerContainer>
        <SellerImage src={seller.avatarSrc} alt='seller'/>
        <StoreName>{seller.storeName}</StoreName>
        </SellerContainer>
        <Grid>{itemList.map((item) => {
            if (sellerID === item.sellerId) {
                return<ItemContainerLink to={`/items/${item.id}`} key={item.id}>
                <ItemImage src={item.imageSrc} alt='item' /> 
                <ItemName>{item.name}</ItemName>
                <Dots/>
                <ItemLatinName><i>{item.latinName}</i></ItemLatinName>
                </ItemContainerLink>
            }})}   
        </Grid>
        </>
    );
}

export default SellerDetails;
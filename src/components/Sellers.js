import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { sellers } from '../data';

const SellerContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const SellerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SellerImage = styled.img`
    height: 350px;
    border-radius: 50px;
    margin: 50px 80px 0 80px;
`;

const StoreName = styled.h4`
    font-size: 30px;
    margin-bottom: 20px;
`;

const StoreDescription = styled.p`
    font-size: 20px;
    color: gray;
    margin-top: 20px;
`;

const Dots = styled.div`
    height: 8px;
    width: 80px;
    background-color: lightgray;
    border-radius: 50%;
`;

const StyledLink = styled(Link)`
    height: 25px;
    padding: 15px;
    background-color: rgb(65, 6, 203);
    border-radius: 10px;
    text-decoration: none;
    color: white;
    font-size: 20px;

    &:hover {
        transform: scale(1.1);
        transition: 0.25s
    }
`;

const Sellers = () => {
    const sellerArr = Object.values(sellers);
    return (
        <SellerContainer>{sellerArr.map((seller) => {
            return (
                <SellerInfo>
                <SellerImage src={seller.avatarSrc} alt ='seller'/>
                <StoreName>{seller.storeName}</StoreName>
                <Dots/>
                <StoreDescription><i>{seller.description}</i></StoreDescription>
                <StyledLink to={`/sellers/${seller.id}`} key={seller.id}>See {seller.id.charAt(0).toUpperCase() + seller.id.slice(1)}'s products</StyledLink>
                </SellerInfo>
            )
        })}
        </SellerContainer>
    );
}

export default Sellers;
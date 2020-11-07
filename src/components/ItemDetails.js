import React from 'react';
import { useParams } from 'react-router-dom';
import { items, sellers } from '../data.js';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    margin-top: 10vh;

    & img{
        height: auto;
        width: 380px;
        border-radius: 30px;
    }

    .text{
        margin-left: 50px;
    }
    & h2{
        color: gray;
        font-weight: 500;
        font-size: 1.3em;
        font-style: italic;
        margin-top: -23px;
        margin-bottom: 50px;
    }

    & p{
        font-size: 1.1em;
    }

    & span{
        font-weight: bold;
    }

    & button{
        background-color: #4700E0;
        color: white;
        font-size: 1.4em;
        padding: 20px 80px;
        border: none;
        border-radius: 40px;
    }
    & button:focus{
        outline: red 1px solid;
    }
`;
const Seller = styled.div`
    display: flex;
    margin-top: 2vh;

    & img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }

    & p {
        margin-left: 20px;
    }
`;

const ItemDetails = () => {
    const { itemId } = useParams();
    const ITEM = items[itemId];
    let sellerId = ITEM.sellerId;
    const SELLER = sellers[sellerId];

    let innerBtnText = null;
    if (ITEM.quantity > 0){
        innerBtnText = `$${ITEM.price} - Buy now`;
    } else {
        innerBtnText = 'Out of stock';
    };

    return(
    <Div>
        <img src={ITEM.imageSrc}></img>
        <div className='text'>
            <h1>{ITEM.name}</h1>
            <h2>{ITEM.latinName}</h2>
            <p>{ITEM.description}</p>
            <p>Product of <span>{ITEM.countryOfOrigin}</span></p>
            <button onClick='#'>{innerBtnText}</button>
            <Seller>
                <img src={SELLER.avatarSrc}></img>
                <p>Sold by: <span>{SELLER.storeName}</span></p>
            </Seller>
        </div>
    </Div>
    );
}

export default ItemDetails;
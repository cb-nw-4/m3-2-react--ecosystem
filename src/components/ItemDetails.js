import React from 'react';
import styled from 'styled-components';
import { sellers, items } from '../data.js';
import { useParams } from "react-router-dom";

const ItemDetails=()=>{
    const {itemId} = useParams();
    const ID=itemId;
    const name=items[ID].name;
    const latinName=items[ID].latinName;
    const description=items[ID].description;
    const imgsrc=items[ID].imageSrc;
    const country=items[ID].countryOfOrigin;
    const seller=items[ID].sellerId;
    const price=items[ID].price;
    const quantity=items[ID].quantity;
    const sellerStore=sellers[seller].storeName;
    const sellerDescription=sellers[seller].description;
    const sellerAvatar=sellers[seller].avatarSrc;

    return(
        <Wrapper>
            <div>
                <Image src={imgsrc}/>
            </div>
            <div>
                <p>{name}</p>
                <p>{latinName}</p>
                <p>{description}</p>
                <p>Place of origin: {country}</p>
                <button>${price}</button>
                <div>
                    
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper=styled.div`
    display:flex;
    justify-items:center;
    height:500px;
    width:500px;
`;

const Image=styled.img`
    height:350px;
    width:350px;
`;

export default ItemDetails;
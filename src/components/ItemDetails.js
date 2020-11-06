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
        <Main>
            <Wrapper>
                    <Image src={imgsrc}/>
                <MiniContainer>
                    <h1><strong>{name}</strong></h1>
                    <Latin>{latinName}</Latin>
                    <Description>{description}</Description>
                    <Origin>Product of: <Country>{country}</Country></Origin>
                    <div>
                        { (quantity >0) ?
                            <Button>${price}</Button>
                            :<p>Sold Out!</p>
                        }
                    </div>
                    <Seller>
                        <SellerPic src={sellerAvatar} />
                        <Sold>Sold by: <span>{sellerStore}</span></Sold>
                    </Seller>
                </MiniContainer>
            </Wrapper>
        </Main>
    );
};

const Main=styled.div`
    display: flex;
    justify-content: center;
`;

const Wrapper=styled.div`
    display:flex;
    flex-direction:row;
    max-width:800px;
    padding:30px;
    border-radius:10px;
    /* box-shadow: 0px 0px 17px -2px #808080; */
`;

const Image=styled.img`
    height:400px;
    width:400px;
`;

const MiniContainer=styled.div`
    margin-left:20px;
`;

const Description=styled.p`
    font-size:15px;
    line-height:1.5;
`;

const Latin= styled.p`
    color:gray;
    font-size:14px;
    font-style:italic;
    margin:0px 0px 40px 0px;
`;

const Origin=styled.p`
    font-size:13px;
    font-style:italic;
    color:#5e5e5e;
`;

const Country=styled.span`
    font-weight:900;
`;

const Button=styled.button`
    padding:10px 100px 10px 100px;
    background-color:tomato;
    color:white;
    border-radius:7px;
    outline:none;
    border:1px;
    font-size:17px;
    margin-top:20px;
    
    &:hover{
        cursor: pointer;
    }
`;

const SellerPic=styled.img`
    height:40px;
    width:40px;
    border-radius:50%;
    margin-top:3%;
`;

const Seller=styled.div`
    display:flex;
`;
const Sold=styled.p`
    margin-top: auto;
    margin-left: 5px;

    &>span{
        font-style:italic;
        font-weight:800;
        color:#5e5e5e;
    }
`;
export default ItemDetails;


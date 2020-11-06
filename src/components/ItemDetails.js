import React from 'react';

import styled from 'styled-components';

import { useParams } from "react-router-dom";

import { items, sellers } from '../data';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const FruitInfo = styled.section` 
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const FruitImage = styled.img` 
    height: 300px;
    width: 300px;
    margin:  30px 10px 10px 10px;
    border-radius: 5px;
`

const FruitName = styled.h5`
    font-family: Helvetica, sans-serif;
    font-size: 24px;
    margin: 0px 10px;
`

const LatinName = styled.h6`
    font-family: Helvetica, sans-serif;
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
    margin: 10px;
    color: darkgray;
`

const Description = styled.p` 
    font-family: Helvetica, sans-serif;
    font-size: 14px;
    margin: 10px;
`

const Country = styled(Description)`
    font-style: italic;
    font-weight: bold;
`

const BuyButton = styled.button` 
    height: 70px;
    width: 175px;
    background-color: cyan;
    margin: 10px;
    font-size: 18px;
    font-weight;
    padding: 10px;
    border-radius: 5px;
`

const OutOfStock = styled(Description)` 
    font-size: 18px;
    font-weight: bold;
    margin: 10px;
`

const SellerContainer = styled.div` 
    display: flex;
`

const SellerImage = styled.img` 
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin: 10px;
`
const SellerText = styled(Description)` 
    font-weight: bold;
    font-size: 16px;
    margin-top: 25px;
`

const ItemDetails = () => {
    const { itemId } = useParams();
    return (
        <Container>
            <FruitImage src={items[itemId].imageSrc} alt={items[itemId].name} />
            <FruitInfo>
                <FruitName>{items[itemId].name}</FruitName>
                <LatinName>{items[itemId].latinName}</LatinName>
                <Description>{items[itemId].description}</Description>
                <Country>Product of {items[itemId].countryOfOrigin}</Country>
                {items[itemId].quantity > 0 ? <BuyButton>${items[itemId].price} – Buy now</BuyButton> : <OutOfStock>Out of stock</OutOfStock>} 
                <SellerContainer>
                    <SellerImage src={sellers[items[itemId].sellerId].avatarSrc} /> 
                    <SellerText>Sold by: {sellers[items[itemId].sellerId].storeName}</SellerText>                  
                </SellerContainer>    
                
            </FruitInfo>
        </Container>
    )
}

export default ItemDetails;



// const ListingGrid = ({ itemList }) => {
//     return(
//         <div>
//             {itemList.map((item) => {
//                 return (
//                     <FruitContainer>
//                         <FruitItem>
//                             <FruitImage src={item.imageSrc} />
//                             <FruitName>{item.name}</FruitName>
//                             <LatinName>{item.latinName}</LatinName>
//                         </FruitItem>
//                     </FruitContainer>
//                 )

//             })}
//         </div>
//     );
// }
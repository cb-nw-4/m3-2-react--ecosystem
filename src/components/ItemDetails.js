import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { useParams } from "react-router-dom";

import { items } from '../data';

const FruitName = styled.h5`
    font-family: Helvetica, sans-serif;
    font-size: 20px;
    margin: 0px 10px;
`

const LatinName = styled.p`
    font-family: Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;
    margin: 0px 10px;
    color: darkgray;
`

const ItemDetails = () => {
    const { itemId } = useParams();
    return (
        <div>
            <FruitName>{items.name}</FruitName>
            <LatinName>{items.latinName}</LatinName>
        </div>
        
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
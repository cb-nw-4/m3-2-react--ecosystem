import React from 'react';
import { useParams } from "react-router-dom";
import { items as data } from '../data';
import styled from 'styled-components';


const FruitImage = styled.img`
max-width: 350px; 
border-radius: 15px;   
`;




const ItemDetails = () => {

  const { itemId } = useParams();
  return(
      <>
      <FruitImage src={data[itemId].imageSrc}/>
      <div>
        <h1>{data[itemId].name}</h1>
        <p><i>{data[itemId].latinName}</i></p>
        <p>{data[itemId].description}</p>
        <p><i>a product of <span><strong>{`${data[itemId].countryOfOrigin}`}</strong></span></i></p>
      </div>
      </>
  );
};



export default ItemDetails;
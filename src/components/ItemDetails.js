import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../data";
import { sellers } from "../data";
import styled from "styled-components";

export const ItemDetails = () => {
  const { itemId } = useParams();
  const item = items[itemId];
  return (
    <FruitContainer>
      <FruitImageContainer src={items[itemId].imageSrc} />
      <FruitDescriptionContainer>
        <h2>{item.name}</h2>
        <p>{item.latinName}</p>
        <p>{item.description}</p>
        <p>Product of {item.countryOfOrigin}</p>
        {item.quantity > 0 ? <button>${item.price} - Buy now</button> : <p>Out of stock </p>}
        <SellerContainer>
          <img src={sellers[item.sellerId].avatarSrc}></img>
          <p>Sold by: {sellers[item.sellerId].storeName}</p>
        </SellerContainer>
      </FruitDescriptionContainer>
    </FruitContainer>
  );
};

const SellerContainer = styled.div`
  display: flex;
  margin-top: 1rem;

  img {
    margin-right: 1rem;
  }
`;


const FruitContainer = styled.div`
  display: flex;
  align-items: top;
  padding-top: 1rem;
`;

const FruitImageContainer = styled.img`
  height: auto;
  width: 40%;
  border-radius: 10px;
  margin-right: 2rem;
`;

const FruitDescriptionContainer = styled.div`
  h2 {
    margin: 0;
  }
  p {
    margin: 0;
    color: darkgrey;
  }
  button {
    padding: 0.5rem 2rem;
    background-color: #405de6;
    color: white;
    border-radius: 8px;
  }
  div {
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`;

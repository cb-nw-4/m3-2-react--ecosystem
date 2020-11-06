import React from "react";
import { useParams } from "react-router-dom"; 
import { items, sellers } from "../data"; 
import styled from 'styled-components';

const ItemDetails = () => {
  const params = useParams();  
  const fruit = items[params.itemId]; 
  let outOfStock;
  if (fruit.quantity == 0) {
    outOfStock = "Out of stock";
  } else {
    outOfStock = <Button>${fruit.price} - Buy now</Button>;
  } 
  return (
    <ItemContainer>
      <div>
        <FruitImg src={fruit.imageSrc}></FruitImg>
      </div>
      <ItemDetailsContainer>
        <h1>{fruit.name}</h1>
        <p>{fruit.latinName}</p>
        <p>{fruit.description}</p>
        <p>
          Product of <em>{fruit.countryOfOrigin}</em>
        </p>
        <div>{outOfStock}</div>
        <SellerContainer>
          <div>
            <SellerAvatar
              src={sellers[fruit.sellerId].avatarSrc}
            ></SellerAvatar>
          </div>
          <div>
            <p>Sold by: {sellers[fruit.sellerId].storeName}</p>
          </div>
        </SellerContainer>
      </ItemDetailsContainer>
    </ItemContainer>
  );
}; 
 
const ItemContainer = styled.div`
  display: flex;
  padding: 20px; 
  
`;

const ItemDetailsContainer = styled.div`
  padding-left: 20px;
`;

const SellerContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const FruitImg = styled.img`
  width: 300px;
  margin-top: 26px;
  border-radius: 14px;
`;

const SellerAvatar = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 5px;
`;

const Button = styled.button`
  padding: 16px;
  background-color: #4c30ff;
  color: white;
  border: none;
  border-radius: 10px;
`;

export default ItemDetails;

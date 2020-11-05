import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { items, sellers } from "../data";


let Wrapper = styled.div`
  margin: 1em 15%;
  padding: auto;
  display: flex;
  & p {
    text-align: left;
  }
`;

let ItemDetailsContainer = styled.div`
  padding-left: 20px;
`;

let SellerContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

let ItemImage = styled.img`
  width: 300px;
  border-radius: 10px;
`;

let ItemName = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: black;
  margin-top: 5px;
`;

let LatinName = styled.div`
  color: grey;
  font-style: italic;
  text-decoration: none;
`;

let Avatar = styled.img`
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 5px;
`;

let Button = styled.button`
  background: #4700E0;
  border: none;
  padding: 15px 32px;
  color: white;
  font-size: 1.1em;
  border-radius: 10px;
`;

const ItemDetails = () => {
  const params = useParams();
  const item = items[params.itemId];
  let outOfStock;
  if (item.quantity == 0) {
    outOfStock = "Out of stock";
  } else {
    outOfStock = <Button>${item.price} - Buy now</Button>;
  }

  return (
    <Wrapper>
      <div>
        <ItemImage src={item.imageSrc}></ItemImage>
      </div>
      <ItemDetailsContainer>
        <ItemName>{item.name}</ItemName>
        <LatinName>{item.latinName}</LatinName>
        <p>{item.description}</p>
        <p>
          Product of <em>{item.countryOfOrigin}</em>
        </p>
        <div>{outOfStock}</div>
        <SellerContainer>
          <div>
            <Avatar
              src={sellers[item.sellerId].avatarSrc}
            ></Avatar>
          </div>
          <div>
            <p>Sold by: <strong>{sellers[item.sellerId].storeName}</strong></p>
          </div>
        </SellerContainer>
      </ItemDetailsContainer>
    </Wrapper>
  );
};

export default ItemDetails;
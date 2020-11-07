import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { items } from "../data";
import { sellers } from "../data";

const Image = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 125px;
  padding: 40px;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 25px;
  margin: 0px;

  + p {
    font-size: 20px;
  }
`;

const FruitContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  font-family: "Roboto", sans-serif;

  > div {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    max-width: 400px;
  }

  > div > div {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  div img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 20px;
  }
`;

const BuyButton = styled.button`
  color: white;
  font-size: 25px;
  border: none;
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: purple;
  width: 300px;
  border-radius: 20px;
  outline: none;
`;

const NoStockButton = styled.button`
  color: white;
  font-size: 25px;
  border: none;
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: gray;
  width: 300px;
  border-radius: 20px;
  outline: none;
`;

const ItemDetails = (props) => {
  const params = useParams();
  let salesPerson = items[params.itemId].sellerId;
  if (items[params.itemId].quantity > 0) {
    return (
      <FruitContainer key={items[params.itemId].id}>
        <Image
          src={items[params.itemId].imageSrc}
          alt={items[params.itemId].name}
        />
        <div>
          <Name>{items[params.itemId].name}</Name>
          <p>{items[params.itemId].latinName}</p>
          <p>{items[params.itemId].description}</p>
          <p>{`Origin: ${items[params.itemId].countryOfOrigin}`}</p>
          <BuyButton>{`Add to Cart $${items[params.itemId].price}`} </BuyButton>
          <div>
            <img
              src={sellers[salesPerson].avatarSrc}
              alt={sellers[salesPerson].id}
            ></img>
            <p>{`Sold by ${sellers[salesPerson].storeName}`}</p>
          </div>
        </div>
      </FruitContainer>
    );
  } else {
    return (
      <FruitContainer key={items[params.itemId].id}>
        <Image
          src={items[params.itemId].imageSrc}
          alt={items[params.itemId].name}
        />
        <div>
          <Name>{items[params.itemId].name}</Name>
          <p>{items[params.itemId].latinName}</p>
          <p>{items[params.itemId].description}</p>
          <p>{`Origin: ${items[params.itemId].countryOfOrigin}`}</p>
          <NoStockButton className="noStock">{`Out of Stock`} </NoStockButton>
          <div>
            <img
              src={sellers[salesPerson].avatarSrc}
              alt={sellers[salesPerson].id}
            ></img>
            <p>{`Sold by ${sellers[salesPerson].storeName}`}</p>
          </div>
        </div>
      </FruitContainer>
    );
  }
};

export default ItemDetails;

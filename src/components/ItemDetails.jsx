import React from "react";
import { useParams } from "react-router-dom";
import { sellers, items } from "../data";
import styled from "styled-components";

const ItemDetails = () => {
  const { itemId } = useParams();
  const currentItem = items[itemId]``;
  const seller = sellers[currentItem.sellerId];

  const quantityBanana = currentItem.quantity > 1;

  return (
    <Wrapper>
      <Wrapper2>
        <img alt="Banana" src={currentItem.imageSrc} />
      </Wrapper2>
      <Wrapper3>
        <Name>{currentItem.name}</Name>
        <LatinName>{currentItem.latinName}</LatinName>
        <Description>{currentItem.description}</Description>
        <CountryOfOrigin>
          <span>Product of </span>
          <Country>{currentItem.countryOfOrigin}</Country>
        </CountryOfOrigin>
        {quantityBanana ? (
          <Button>${currentItem.price} - Buy now</Button>
        ) : (
          <NoStock>Not in stock</NoStock>
        )}
        <SellerInfo>
          <div>
            <img alt="avatar" src={seller.avatarSrc} />
          </div>
          <SellerText>Sold by:</SellerText>
          <SellerStore>{seller.storeName}</SellerStore>
        </SellerInfo>
      </Wrapper3>
    </Wrapper>
  );
};

const NoStock = styled.span`
  font-size: 25px;
`;
const SellerText = styled.span`
  font-size: 25px;
`;
const SellerStore = styled.span`
  font-size: 25px;
  font-weight: bold;
`;

const SellerInfo = styled.span`
  img {
    width: 50px;
    border-radius: 50%;
    margin-right: 300px;
    margin-bottom: 20px;
  }
`;
const Button = styled.button`
  width: 250px;
  height: 60px;
  font-size: 25px;
  margin-right: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: #5d09db;
  color: white;
  border-radius: 12px;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Wrapper2 = styled.div`
  img {
    width: 550px;
    border-radius: 10%;
    margin: 40px 100px 40px 40px;
  }
`;
const Wrapper3 = styled.div`
  margin: 40px 100px 40px 40px;
`;
const Name = styled.div`
  font-size: 35px;
  font-weight: bold;
`;
const LatinName = styled.div`
  font-size: 25px;
  font-style: italic;
  color: darkgrey;
  padding-bottom: 20px;
`;
const Description = styled.div`
  font-size: 25px;
  padding-bottom: 20px;
`;
const CountryOfOrigin = styled.div`
  font-size: 25px;
  font-style: italic;
`;

const Country = styled.span`
  font-size: 25px;
  font-style: italic;
  font-weight: bold;
`;
const SellerId = styled.div`
  font-size: 25px;
`;
const Price = styled.div`
  font-size: 25px;
`;
const Quantity = styled.div`
  font-size: 25px;
`;
export default ItemDetails;

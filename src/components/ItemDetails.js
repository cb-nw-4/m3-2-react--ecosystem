import React from 'react';
import { useParams } from "react-router-dom";
import { items } from '../data'
import { sellers } from '../data'
import styled from 'styled-components';

const BoldStyle = styled.b`
  font-weight: bold;
`;

const BoldItalicStyle = styled.b`
  font-weight: bold;
  font-style: italic;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const ProductImage = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 20px;
  margin-right: 40px;
`;

const SellerImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const SellerDetail = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const H1 = styled.h1`
  margin: 0;
`;

const LatinName = styled.div`
  font-size: 1.1rem;
  font-style: italic;
  font-weight: bold;
  color: #b2b2b2;
`;

const BtnBuy = styled.button`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #4700e0;
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 15px 55px;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ItemDetails = () => {
  const { itemId } = useParams();

  return (
    <FlexContainer>
      <div>
        <ProductImage src={items[itemId].imageSrc} />
      </div>
      <div>
        <H1>{items[itemId].name}</H1>
        <LatinName>{items[itemId].latinName}</LatinName>
        <p>{items[itemId].description}</p>
        <p>
          Product of
          <BoldItalicStyle> {items[itemId].countryOfOrigin}</BoldItalicStyle>
        </p>
        {items[itemId].quantity === 0 ? <p>{'Out of Stock'}</p> : <BtnBuy>{'$' + items[itemId].price + ' - Buy now'}</BtnBuy>}
        <SellerDetail>
          <SellerImage src={sellers[items[itemId].sellerId].avatarSrc} ></SellerImage>
          Sold by:{'\u00A0'} {/* needed for space after the colon */}
          <BoldStyle>{sellers[items[itemId].sellerId].storeName}</BoldStyle>
        </SellerDetail>
      </div>
    </FlexContainer>
  );
};

export default ItemDetails;
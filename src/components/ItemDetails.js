import React from 'react';
import { useParams } from "react-router-dom";
import { items as data, sellers } from '../data';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  margin-top: 30px;
`;

const SellerInfoContainer = styled.div`
  h1{
   margin-top: 0;
   margin-bottom: 0;
  }

  .sellerInfo {
    display: flex;
    margin-top: 20px;
  }

  .latinName{
    margin-top: 0;
    margin-bottom: 30px;
    color: grey;
  }

  .secondaryInfo{
    font-size: 14px;
  }

  .outOfStockPar{
    margin: 50px 0;
  }
`;

const PriceButton = styled.button`
  color: white;
  background-color: #473BE0;
  padding: 16px 40px;
  margin: 15px 0 15px 0;
  border: none;
  border-radius: 10px;
  font-size: 18px;
`;

const FruitImage = styled.img`
  max-width: 325px; 
  border-radius: 15px;   
  margin: 0px 40px 40px 0;
`;

const SellerImage = styled.img`
  max-width: 45px; 
  border-radius: 50%;   
  margin-right: 10px;  
`;

const ItemDetails = () => {

  const { itemId } = useParams();
  return(
      <Container>
        <FruitImage src={data[itemId].imageSrc}/>
        <SellerInfoContainer>
          <h1>{data[itemId].name}</h1>
          <p className="latinName"><i>{data[itemId].latinName}</i></p>
          <p className="secondaryInfo">{data[itemId].description}</p>
          <p className="secondaryInfo"><i>Product of <span><strong>{`${data[itemId].countryOfOrigin}`}</strong></span></i></p>
          {data[itemId].quantity !== 0 ? <PriceButton>{`$${data[itemId].price} - Buy now`}</PriceButton> :
          <p className="outOfStockPar"><strong>Out of stock</strong></p>}
          <div className="sellerInfo"> 
            <SellerImage src={sellers[data[itemId].sellerId].avatarSrc} alt={data[itemId].sellerId}/>
            <p className="secondaryInfo">Sold by: <span><strong>{`${sellers[data[itemId].sellerId].storeName}`}</strong></span></p>
          </div>          
        </SellerInfoContainer>
      </Container>
  );
};



export default ItemDetails;
import React from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { items, sellers } from '../data';

const Section = styled.section`
  display: flex;
  align-items: center;

  & img {
    width: 30%;
    border-radius: 10px;
    margin: 0 50px; 
  }

  & em {
    font-weight: bold;
  }

  & span {
    font-style: italic;
  }
  
  & button {
    padding: 15px 30px;
    background-color: #4700E0;
    color: white;
    border: none;
    outline: none;
    border-radius: 10px;
  }
 
  & div {
    padding: 25px 0;
 
  }
`;


const SellerInfo = styled.div`
  display: flex;
 
  & img {
    width: 8%;
    border-radius: 50%;
    margin: 0 10px 0 0;
  }
`;

const ItemDetails = () => {

  const { itemId } = useParams();  //a, b , c, etc 

  // Getting the value (another object) of a property in the items object which matches what's in the url
  let item = items[itemId];
  console.log(item);
  let sellerKey = item.sellerId;
  console.log(sellerKey);
  let seller = sellers[sellerKey];
  console.log(seller);  

  return (
    <Section>
      <img src={item.imageSrc} alt="Item"/>
      <div>
      <h2>{item.name}</h2>
      <p><span>{item.latinName}</span></p>
      <p>{item.description}</p>
      <p><span>Product of <em>{item.countryOfOrigin}</em></span></p>
      { item.quantity === 0 ?
          <button>Out of Stock</button>:
          <button>$ {item.price} - Buy Now</button> }
      <SellerInfo>
         <img src={seller.avatarSrc} alt="Seller"/>
        <p>Sold by: {seller.storeName}</p>
      </SellerInfo>
      </div>
    </Section>
  );


}
  export default ItemDetails;
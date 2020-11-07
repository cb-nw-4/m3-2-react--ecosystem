import React from "react"; 
import styled from 'styled-components'; 
import { Link, useParams } from 'react-router-dom'; 
import { sellers, items } from '../data';
 
const Sellers = (seller) => {  
 
    return (
        <SellersDiv key={seller.id}>
          <SellerLink to={`/sellers/${seller.id}`}> 
          <SellersName>{seller.id}</SellersName>
            <SellersImage src={seller.avatarSrc}></SellersImage> 
          </SellerLink>
        </SellersDiv>
      );
    };

const SellersDiv = styled.div `  
height:300px;
 width:400px;
 display:flex;  
flex-direction:column;
justify-items:center; 
align-items:center; 
text-align:center;

`; 
const SellerLink = styled(Link)` 
 text-decoration:none; 
 color:black;
 `;

const SellersName = styled.h3 ` 
 
 `; 
 const SellersImage = styled.img` 
  height:280px; 
  border-radius:200px;
  `;


export default Sellers;
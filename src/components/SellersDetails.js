import React from 'react';  
import { useParams, Link } from 'react-router-dom';
import {items, sellers} from "../data"; 
import styled from 'styled-components';

const SellersDetails = () => { 
    const params = useParams();  
    const seller = sellers[params.sellerIds];   
    


      return (
    
        <SellersDiv >
        
          <SellersName>{seller.id}</SellersName>
            <SellersImage src={seller.avatarSrc}></SellersImage> 
            <h3 >{seller.storeName}</h3>
       
        </SellersDiv>

      ); 
    
    };

const SellersDiv = styled.div `  
height:300px;

 display:flex;  
flex-direction:column;
justify-items:center; 
align-items:center; 
text-align:center;

`; 

const SellersName = styled.h1 ` 
 
 `; 
 const SellersImage = styled.img` 
  height:280px; 
  border-radius:200px;
  `;


export default SellersDetails;
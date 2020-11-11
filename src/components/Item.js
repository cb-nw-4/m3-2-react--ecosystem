import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FruitImage = styled.img`
max-width: 150px; 
border-radius: 15px;   
position: absolute;
top: -10px;
margin-bottom: 15px;
`;

const FruitContainer = styled.div`
max-width: 100%;     
height: 250px; 
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
border-radius: 10px;
padding: 15px;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
position: relative;  
`;

const FruitName = styled.h2`
border-bottom: 2px solid lightgrey;
padding-bottom: 15px;
margin-bottom: 0px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;  
  color: inherit;
`;

const Item = ({name, latinName, imageSrc, id})=>{
  return(       
      < StyledLink to={`/items/${id}`} >
        <FruitContainer>
          <FruitImage src={imageSrc} alt={name} />
          <FruitName>{name}</FruitName>
          <p><i>{latinName}</i></p>
        </FruitContainer>
      </ StyledLink>
  );
};

export default Item;
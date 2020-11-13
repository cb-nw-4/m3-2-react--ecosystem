import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Grid =  styled.div`
width:80%;
display:flex;
flex-wrap:wrap;
justify-content:center;
margin:20px;


`;

const ImageDiv = styled.div`
width:25%;
height:300px;
display:flex;
flex-direction:column;
align-items: center;
margin:40px; 
border-radius:20px;
box-shadow:0px 0px 19px 3px rgba(177,177,177,0.3);

`;

const ImageStyle= styled.img`
width: 160px;
height: 160px;
border-radius: 20px;
position:relative;
top:-10px;
`;
const ItemName = styled.h2`
    border-bottom: 5px solid lightgray;
    padding-bottom:20px;
    margin:10px 0 0 0;
    font-size: 30px;
`;

const ItemLatin = styled.h3`
    color:lightgray;
`;
const LinkStyled = styled(Link)`
text-decoration:none;
`;


const ListingGrid = ({ itemList }) => {
    console.log(itemList)
    return (<Grid>
        {itemList.map(item => {
            console.log(item)
            return (
            
            <ImageDiv>
                <LinkStyled to= {`/items/${item.id}`}>
                <ImageStyle src={item.imageSrc} alt={"image "} />
                <ItemName>{item.name}</ItemName>
                <ItemLatin>{item.latinName}</ItemLatin>
            
            </LinkStyled>
            </ImageDiv>)
        }
        )};

    </Grid>)
};

export default ListingGrid;
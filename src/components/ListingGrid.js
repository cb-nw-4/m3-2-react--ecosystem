import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';


const ListingGrid = ({ itemList }) => {
    //console.log(itemList);
    return (
        <Container>
            {itemList.map((element)=>{
                //console.log(element);
                return(
                    <>
                        <StyledLink to={`/items/${element.id}`}>
                            <Box key={element.id}>
                                <Image src={element.imageSrc}/>
                                <Name>{element.name}</Name>
                                <Horizontal />
                                <Latin>{element.latinName}</Latin>
                            </Box>
                        </StyledLink>
                    </>
                );
            })}
        </Container>
    );
};

const Image=styled.img`
    height:100px;
    width:100px;
`;

const Container=styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    text-align:center;
    grid-row-gap:30px;
    grid-column-gap:30px;
    justify-items: center;
`;

const Box=styled.div`
    padding:20px;
    box-shadow: 0px 0px 17px -2px #808080;
    border-radius:10px;
    height:220px;
    width:150px;
`;

const StyledLink=styled(Link)`
    text-decoration:none;
    color:black;
    &:hover{
        transform:scale(1.05);
    }
`;

const Name= styled.h3`
    font-weight:600;
`;

const Latin=styled.p`
    font-size:13px;
    color:gray;
    font-style:italic;
`;
const Horizontal=styled.hr`
    margin:0 65px 0 65px;
    color:gray;
`;

export default ListingGrid;
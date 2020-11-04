import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';


const ListingGrid = ({ itemList }) => {
    //console.log(itemList);
    return (
        <Container>
            {itemList.map((element)=>{
                console.log(element);
                return(
                    <Box key={element.id}>
                        <Image src={element.imageSrc}/>
                        <h2>{element.name}</h2>
                        <h3>{element.latinName}</h3>
                    </Box>
                );
            })}
        </Container>
    );
};

const Image=styled.img`
    height:100px;
    width:100px;
    border-radius:10px;
`;

const Container=styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    text-align:center;
    grid-row-gap:30px;
    grid-column-gap:10px;
    justify-items: center;
    padding:30px;
`;

const Box=styled.div`
    padding:20px;
    box-shadow: 0px 0px 17px -2px #808080;
    border-radius:10px;
    height:200px;
    width:200px;
`;

export default ListingGrid;
import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Grid = styled.section`
    display: grid;
    grid-gap: 80px;
    grid-template-columns: auto auto auto;
    justify-content: center;
    margin: 100px 0;
`;


const ItemContainerLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 10px 18px lightgray;
    border-radius: 20px;
    width: 250px;
    text-decoration: none;

    &:hover {
        transform: scale(1.1);
        transition: transform 0.5s;
    }
`;

const ItemImage = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 20px;
    margin-top: 20px;
`;

const ItemName = styled.h3`
    font-size: 30px;
    margin: 10px 0;
    color: black;
`;

const ItemLatinName = styled.h4`
    font-size: 20px;
    margin: 10px 0;
    font-weight: normal;
    color: gray;
`;

const Dots = styled.div`
    height: 8px;
    width: 80px;
    background-color: lightgray;
    border-radius: 50%;
`;

const ListingGrid = ({ itemList }) => {
    return (
        <Grid>{itemList.map((item) => {
            return (
                <ItemContainerLink to={`/items/${item.id}`} key={item.id}>
                    <ItemImage src={item.imageSrc} alt='item' /> 
                    <ItemName>{item.name}</ItemName>
                    <Dots/>
                    <ItemLatinName><i>{item.latinName}</i></ItemLatinName>
                </ItemContainerLink>
            )
        })}
        </Grid>
    );
}

ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            latinName: PropTypes.string.isRequired,
            imageSrc: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ListingGrid;

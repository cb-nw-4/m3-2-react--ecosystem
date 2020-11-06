import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { items } from '../data';

import ItemDetails from './ItemDetails';

const FruitContainer = styled.div` 
    display: inline-block;
`

const FruitItem = styled.section` 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    margin: 0px;
`

const FruitImage = styled.img` 
    height: 175px;
    width: 175px;
    margin:  30px 10px 10px 10px;
    border-radius: 5px;
`

const FruitName = styled.h5`
    font-family: Helvetica, sans-serif;
    font-size: 20px;
    margin: 0px 10px;
`

const LatinName = styled.p`
    font-family: Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;
    margin: 0px 10px;
    color: darkgray;
`

const ListingGrid = ({ itemList }) => {
    return (
        <div>
            {itemList.map((item) => {
                return (
                    <FruitContainer>
                        <FruitItem>
                        <Link to={`/items/${item.id}`}><FruitImage src={item.imageSrc} /></Link>
                            <FruitName>{item.name}</FruitName>
                            <LatinName>{item.latinName}</LatinName>
                        </FruitItem>
                    </FruitContainer>
                )
            })}
        </div>
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
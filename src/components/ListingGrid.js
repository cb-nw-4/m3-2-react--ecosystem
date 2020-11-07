import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FruitGrid = styled.section`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: space-between;
    position: absolute;
    left: 25%;
    top: 125px;
    width: 800px;
    background-color: #ffcc00;
`;

const FruitContainer = styled(Link)`
    margin: 50px;
    width: 135px;
    text-decoration: none; 
    &:active {
        text-decoration: none
    }
`;

const Image = styled.img`
    position: relative;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 140px;
    height: 140px;
    border-radius: 10%;
`;

const FruitName = styled.h3`
    position: relative;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin: 5px 0 0;
    font-weight: bold;
    text-align: center;
    font-family: sans-serif;
`;

const FruitLatinName = styled.p`
    margin: 5px 0 0;
    font-weight: bold;
    text-align: center;
    font-family: sans-serif;
`;


const ListingGrid = (props) => {
    return (
        <FruitGrid className="fruitGrid">
        {props.fruits.map((fruit) => {
            return (
                <FruitContainer to={`/items/${fruit.id}`}>
                    <Image alt="fruitPicture" src={fruit.imageSrc} />
                    <FruitName>{fruit.name}</FruitName>
                    <FruitLatinName>{fruit.latinName}</FruitLatinName>
                </FruitContainer>
            )
        }
    )}
        </FruitGrid>
    )
};

ListingGrid.propTypes = {
  fruits: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};




export default ListingGrid;
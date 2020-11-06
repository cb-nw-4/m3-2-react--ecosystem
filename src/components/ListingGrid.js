import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;

    & li {
        margin: 2vh 8vw;
        padding: 20px;
        line-height: 1vh;
        list-style: none;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    & img {
        width: 13vw;
        height: auto;
        border-radius: 20px;
    }

    & h1 {
        border-bottom: 2px solid black;
        padding-bottom: 2.5vh;
    }

    & h2{
        color: gray;
        width: 90%;
        height: 5vh;
        line-height: 2.8vh;
    }
`;

const ListingGrid = ({ itemList }) => {
    return (
        <Ul>
            {itemList.map((item) => {
                return (
                    <li>
                        <img src={item.imageSrc}></img>
                        <h1>{item.name}</h1>
                        <h2>{item.latinName}</h2>
                        <Link to={`/items/${item.id}`}>Item Details</Link>
                    </li>
                    );
            })}
        </Ul>
    );
};



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
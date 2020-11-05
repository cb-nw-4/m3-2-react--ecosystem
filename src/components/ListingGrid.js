import React from 'react';

import styled from "styled-components";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

let Item = styled.div`
  margin: 35px;
  text-align : center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 230px;
  padding: 20px 0;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.2);
  text-decoration: none;
`;

let ItemImage = styled.img`
  margin: 5px;
  margin-top: -30px;
  width: 150px;
  border-radius: 10px;
`;

let ItemName = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin: 5px;
  color: black;
`;

let Divider = styled.div`
  margin: 5px 60px;
  width: 45px;
  height: 3px;
  background: #f0f0f0;
`;

let LatinName = styled.div`
  color: grey;
  font-style: italic;
  margin: 5px;
  text-decoration: none;
`;

const ListingGrid = ({ itemList }) => {
  let { imageSrc, name, latinName, id } = itemList;
  return (
    <Item key={`${id}`}>
      <Link to={`/items/${id}`} style={{ textDecoration: 'none' }}>
        <ItemImage src={imageSrc} alt="fruit-img" />
        <ItemName>{name}</ItemName>
        <Divider />
        <LatinName>{latinName}</LatinName>
      </Link>
    </Item>
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

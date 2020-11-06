import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Grid = styled.section`
  position: relative;
  top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  justify-items: center;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 30px 0px #e8e8e8;
  padding-left: 40px;
  padding-right: 40px;
  margin: 15px 30px 15px 30px;
`;

const Img = styled.img`
  position: relative;
  top: -10px;
  border-radius: 7px;
  height: 155px;
  width: 155px;
`;

const Name = styled.div`
  position: relative;
  top: -20px;
`;

const LatinName = styled.div`
  position: relative;
  top: -20px;
  font-size: 0.8rem;
  font-style: italic;
  font-weight: bold;
  color: #b2b2b2;
`;

const ListingGrid = (props) => {
  return <Grid>
    {props.itemList.map(item => {
      return (
        <Cell key={Date.now() * Math.round(Math.random() * 1000000 + 1)}> {/* just use UUID next time */}
          <div><Link to={`/items/${item.id}`}><Img src={item.imageSrc} /></Link></div>
          <Name><h2>{item.name}</h2></Name>
          <LatinName>{item.latinName}</LatinName>
        </Cell>);
    })}
  </Grid>;
}

ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ListingGrid;
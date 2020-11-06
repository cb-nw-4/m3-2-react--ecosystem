import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Grid = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: auto auto;
    grid-column-gap: 46px;
    grid-row-gap: 46px;
    justify-items: stretch;
`;
const Item = styled.div`
    box-shadow: 0px 3px 20px #e0e0eb;
    border-radius: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledImg = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 16px;
    position: absolute;
    top: -16px;
`;

const Name = styled.p`
    font-size: 1.75rem;
    font-weight: 900;
    margin:175px 0 20px;
`;

const LatinName = styled.p`
    width: 200px;
    margin-top: 10px;
    margin-bottom: 40px;
    text-align: center;
    font-style: italic;
    color: #A0A0A0;
    font-size: 1.25rem;
    font-weight: 600;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;


const ListingGrid = ({ itemList }) => {
    return (
        <Grid>
        {
            itemList.map((item)=>{
                return (
                    <Item id = {item.id}>
                        <StyledImg src={item.imageSrc}/>
                        <Name><StyledLink to={`/items/${item.id}`}>{item.name}</StyledLink></Name>
                        <LatinName>{item.latinName}</LatinName>
                    </Item>
                    );
            })
        }
        </Grid>
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
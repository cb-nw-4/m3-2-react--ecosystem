import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Grid = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 270px 270px 270px;
    grid-template-rows: auto auto;
    grid-column-gap: 35px;
    grid-row-gap: 35px;
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
    width: 160px;
    height: 160px;
    border-radius: 10px;
    position: absolute;
    top: -16px;
`;

const Name = styled.p`
    font-size: 1.6rem;
    font-weight: 800;
    margin:160px 0 20px;
`;

const LatinName = styled.p`
    width: 200px;
    margin-top: 10px;
    margin-bottom: 40px;
    text-align: center;
    font-style: italic;
    color: grey;
    font-weight: 500;
`;



const ListingGrid = ({ itemList }) => {
    let keyValue = 0;
    return (
        <Grid>
        {
            itemList.map((item)=>{
                keyValue++;
                return (
                    <Item key = {keyValue}>
                        <StyledImg src={item.imageSrc}/>
                        <Name>{item.name}</Name>
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
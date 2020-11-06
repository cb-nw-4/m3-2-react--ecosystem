import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Item = styled.div`
    box-shadow: 0px 3px 20px #e0e0eb;
    border-radius: 10px;
    width: 210px;
    margin: 15px;
    display: inline-block;
    text-align: center;
    position: relative;
`;

const StyledImg = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 10px;
`;

const Name = styled.p`
    font-size: 1.25rem;
    font-weight: 900;
    margin:10px 0;

`;



const ListingGrid = ({ itemList }) => {
    let keyValue = 0;
    return (
        <div>
        {
            itemList.map((item)=>{
                keyValue++;
                return (
                    <Item key = {keyValue}>
                        <StyledImg src={item.imageSrc}/>
                        <Name>{item.name}</Name>
                        <p>{item.latinName}</p>
                    </Item>
                    );
            })
        }
        </div>
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
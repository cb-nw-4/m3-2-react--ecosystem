import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './Item';


const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr) ) ;
    grid-gap: 80px;
    margin-top: 50px;
`;

const ListingGrid = ({ itemList }) => {    
    return (
        <GridContainer>
            {itemList.map((item)=>{
                return (                              
                    <Item name={item.name} latinName={item.latinName} imageSrc={item.imageSrc}  id={item.id} key={item.id} />    
                );
            })}
        </GridContainer>
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
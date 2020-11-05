import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


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
                    <div key={item.id}><Item name={item.name} latinName={item.latinName} imageSrc={item.imageSrc} /></div> 
                );
            })}
        </GridContainer>
    );
  };
  
  const FruitImage = styled.img`
    max-width: 150px; 
    border-radius: 15px;   
    position: absolute;
    top: -10px;
    margin-bottom: 15px;
  `;

  const FruitContainer = styled.div`
    max-width: 100%;     
    height: 250px; 
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;  
  `;

  const FruitName = styled.h2`
    border-bottom: 2px solid lightgrey;
    padding-bottom: 15px;
    margin-bottom: 0px;
  `;
  const Item = ({name, latinName, imageSrc})=>{
      return(
          <FruitContainer>
              <FruitImage src={imageSrc} alt={name} />
              <FruitName>{name}</FruitName>
              <p><i>{latinName}</i></p>
          </FruitContainer>
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
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const DivContainer = styled.div`
  margin: 20px;
  padding: 50px;



  & div{
    display: inline-block;
    width: 25%;
    text-align: center;
    margin: 20px;
    border-radius: 10px;
    box-shadow: -1px 1px 10px 15px rgba(215,215,215,0.34);
    -webkit-box-shadow: -1px 1px 10px 15px rgba(215,215,215,0.34);
    -moz-box-shadow: -1px 1px 10px 15px rgba(215,215,215,0.34);
    
  }
  & img{
    padding: 5px;
    width: 150px;
    margin-top: -20px; 
    border-radius: 20px;
  }

  & a{
    
    text-decoration: none;
  }


  & h3{
    color: black;

  }
  & h4{
    color: gray;
   
  }
`


const ListingGrid = ({ itemList, sellerList }) => {

  const itemList1 = Object.values(itemList);

  const sellerList1 = Object.values(sellerList);

 
    return (<>
              <DivContainer>
                {itemList1.map(item => {
                  return (<div>
                      <Link to= {`/items/${item.id}`}>
                      <img src={item.imageSrc} alt='fruit'/>
                      <h3>{item.name} </h3>
                    
                      <h4>{item.latinName}</h4>
                    </Link>
                    </div>)
                }
                )}
              </DivContainer>
              <h2> Brwose sellers:</h2>
              <DivContainer>
                {sellerList1.map(seller => {
                  return (<div>
                      <Link to= {`/sellers/${seller.id}`}>
                      <img src={seller.avatarSrc} alt='fruit'/>
                      <h3>{seller.id} </h3>
                    
                      <h4>{seller.storeName}</h4>
                    </Link>
                    </div>)
                }
                )}
              </DivContainer>
              
            </>)
      
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
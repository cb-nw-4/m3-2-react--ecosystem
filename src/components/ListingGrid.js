import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
    text-align: center;

    & div {
        width: 25%;
        display: inline-block;
        text-align: center;
        margin: 15px;
    }

    & img {
        width: 50%;    
        border-radius: 5px;
    }

    & h2 {
        margin: 0;
    }
    
    & p {
        margin: 5px;
    }

    & a {
        text-decoration: none;
        color: black;
    }
`;

const ListingGrid = ( props ) => {
    return ( 
        <Section> {
            props.itemList.map((item) => {
                 return (
                    <div key={item.id}>
                        <Link to={`/items/${item.id}`}>
                            <img src={item.imageSrc} alt="Item"/>
                            <h2>{item.name}</h2>
                            <p>{item.latinName}</p>
                        </Link>
                    </div>
                )
            })}
        </Section>
    )
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
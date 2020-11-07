import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    margin: 80px;
    padding: 40px;
  }
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.5), 0 3px 30px 0 rgba(0, 0, 0, 0.4);
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 25px;
  font-family: "Roboto", sans-serif;

  + p {
    font-size: 20px;
    font-family: "Roboto", sans-serif;
  }
`;

const ListingGrid = ({ itemList }) => {
  return (
    <GridContainer>
      {itemList.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/items/${item.id}`}>
              <Image src={item.imageSrc} alt={item.name} />
            </Link>
            <Name>{item.name}</Name>
            <p>{item.latinName}</p>
          </div>
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

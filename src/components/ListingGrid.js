import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ListingGrid = ({ itemList }) => {
  console.log(itemList);
  return (
    <Container>
      {itemList.map((item) => {
        return (
          <ContainerLink to={`/items/${item.id}`}>
            <ImageContainer>
              <Image src={item.imageSrc} />
              <h2>{item.name}</h2>
              <p>{item.latinName}</p>
            </ImageContainer>
          </ContainerLink>
        );
      })}
    </Container>
  );
};


const ContainerLink = styled(Link)`
  text-decoration: none;
  `;

const Container = styled.div`
  display: grid;
  grid-gap: 100px;
  /* grid-auto-rows: 200px; */
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
`;

const ImageContainer = styled.div`
  box-shadow: 0px 0px 13px 5px rgba(0, 0, 0, 0.21);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 60%;
  height: 60%;
  border-radius: 10px;
  position: relative;
  top: -10px;
`;

ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

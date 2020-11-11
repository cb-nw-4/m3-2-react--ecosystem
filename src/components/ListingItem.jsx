import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListingItem = ({ item1 }) => {
  return (
    <Wrapper>
      <Link to={`/items/${item1.id}`}>
        <img alt="Fruit" src={item1.imageSrc} />
        <Text1> {item1.name}</Text1>
        <Text2> {item1.latinName}</Text2>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;

  a {
    text-decoration: none;
  }

  img {
    width: 350px;
    padding-left: 40px;
    padding-left: 40px;
    padding-top: 40px;
  }
`;

const Text1 = styled.div`
  padding-left: 40px;
  margin: 0;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

const Text2 = styled.div`
  padding-left: 40px;
  margin: 0;
  font-size: 15px;
  color: black;
  font-weight: bold;
`;

export default ListingItem;

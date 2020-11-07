import React from "react";
import styled from "styled-components";
import ListingGrid from "./ListingGrid";

import { items } from "../data";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Paragraph = styled.p`
  font-size: 25px;
  font-family: "Roboto", sans-serif;
`;

const Homepage = (props) => {
  return (
    <Container>
      <Paragraph>
        Fruit emporium sells the finest fruits from this world and beyond.
        Browse items:
      </Paragraph>
      <ListingGrid itemList={Object.values(items)} />
    </Container>
  );
};

export default Homepage;

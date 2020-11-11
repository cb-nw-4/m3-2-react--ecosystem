import React from "react";
import ListingGrid from "./ListingGrid";
import styled from "styled-components";

const Homepage = (props) => {
  console.log(props);
  return (
    <div>
      <Paragraph>
        Fruit emporium sells the finest fruits from this world and beyond.
        Browse items:
      </Paragraph>
      <ListingGrid itemList={Object.values(props.itemsData1)} />
    </div>
  );
};

const Paragraph = styled.div`
  font-size: 20px;
  margin-left: 40px;
`;

export default Homepage;

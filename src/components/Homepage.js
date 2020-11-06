import React from "react";
import styled from "styled-components";
import { ListingGrid } from "./ListingGrid";
import { items } from "../data";

export const Homepage = () => {
  return (
    <div>
      Fruit emporium sells the finest fruits from this world and beyond.
      <BrowseItems>Browse items:</BrowseItems>
      <ListingGrid itemList={Object.values(items)} />
    </div>
  );
};

const BrowseItems = styled.h4`
  margin-top: 1rem;
`;

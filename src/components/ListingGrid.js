import React from "react";
import ItemList from "./ItemList";
import PropTypes from "prop-types";
import { items } from "../data";

const ListingGrid = ({ itemArray }) => {
  let output = itemArray.map((item) => {
    return (
      <div>
        <div key={item.id}>{ItemList(item)}</div>
      </div>
    );
  });
  return output;
};

ListingGrid.propTypes = {
  itemArray: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ListingGrid;

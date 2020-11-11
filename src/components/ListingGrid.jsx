import React from "react";
import PropTypes from "prop-types";
import ListingItem from "./ListingItem";

const ListingGrid = ({ itemList }) => {
  return itemList.map((item) => <ListingItem item1={item} />);
};

ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      countryOfOrigin: PropTypes.string.isRequired,
      sellerId: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ListingGrid;

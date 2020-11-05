import React from 'react';

const ListingGrid = ({ itemList }) => {
    return "Todo";
}

ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired;
            latinName: PropTypes.string.isRequired;
            imageSrc: PropTypes.string.isRequired;
        })
    ).isRequired,
};

export default ListingGrid;
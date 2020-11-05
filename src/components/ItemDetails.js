import React from 'react';
import { Link as LinkStyle} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ItemDetails = ({}) => {
    return(
        <LinkStyle to='/items/${item.id}'></LinkStyle>
    );
}

export default ItemDetails;
import React from "react";
import Sellers from "./Sellers"; 
import styled from "styled-components";
import PropTypes from "prop-types";
import { sellers } from "../data";

const SellersGrid = ({ sellersArray }) => {
  let output = sellersArray.map((seller) => {
    return (
      <Wrapper>
        <div key={seller.id}>{Sellers(seller)}</div>
      </Wrapper>
    );
  });
  return output;
};  
 

const Wrapper = styled.div` 

 height:400px;

 `;
export default SellersGrid;
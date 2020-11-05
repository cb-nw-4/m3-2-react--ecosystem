import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <h1>Fruit Emporium</h1>
      <Menu>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  width: 400px;
  height: 20px;
`;
const StyledLink = styled(Link)`
  color: #4350e0;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #cc43a1;
  }
`;
export default Header;

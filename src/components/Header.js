import React from 'react';

import {NavLink } from "react-router-dom";

import styled from "styled-components";

let Wrapper = styled.div`
  height: 70px;
  margin: 0 15%;
  display: flex;
  justify-content: space-between;
  padding: auto;
`;

let Nav = styled.nav`
  margin-top: 20px;
  color: #6228E5;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    font-weight: 700;
    margin: 10px;
    text-decoration: none;
  }
  & a:hover {
    color: #FF2585;
  }
  & a:active {
    color: #FF2585;
    text-decoration: underline;
  }
`;

const Header = (props) => {
  return (
  <Wrapper>
    <h1>Fruit Emporium</h1>
    <Nav>
      <NavLink to="/">Home</NavLink>
      {/* <NavLink to="/sellers">Sellers</NavLink> */}
      <NavLink to="/about">About</NavLink>
    </Nav>
  </Wrapper>
  );
};


export default Header;

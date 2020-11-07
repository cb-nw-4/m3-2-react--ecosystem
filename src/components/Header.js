import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Head = styled.header`
  display: flex;
  justify-content: space-between;
`;

const CompanyName = styled.p`
  font-weight: bold;
  font-size: 25px;
  font-family: "Roboto", sans-serif;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    font-family: "Roboto", sans-serif;
    padding: 20px;
    text-decoration: none;
    color: black;
    font-size: 30px;
  }

  .selected {
    color: green;
    text-decoration: underline;
  }

  a:hover {
    color: red;
  }
`;

const Header = (props) => {
  return (
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      ></link>
      <CompanyName>Fruit Emporium</CompanyName>

      <LinkContainer>
        <NavLink exact to="/" activeClassName="selected">
          Index
        </NavLink>
        <NavLink exact to="/about" activeClassName="selected">
          About
        </NavLink>
      </LinkContainer>
    </Head>
  );
};

export default Header;

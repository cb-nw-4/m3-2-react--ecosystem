import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper2>
      <div>
        <Logo>Fruit Emporium</Logo>
      </div>
      <Wrapper3>
        <NavLink
          exact
          to="/"
          activeStyle={{
            fontWeight: "bold",
            color: "darkred",
          }}
        >
          HOME
        </NavLink>
        <NavLink
          exact
          to="/about"
          activeStyle={{
            fontWeight: "bold",
            color: "darkred",
          }}
        >
          ABOUT
        </NavLink>
      </Wrapper3>
    </Wrapper2>
  );
};

export default Header;

const Logo = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

const Wrapper2 = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  margin-left: 40px;
`;

const Wrapper3 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  a {
    text-decoration: none;
    color: black;
  }
`;

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 15px;
  color: blueViolet;
  font-weight: bold;

  &.active {
      border-bottom: 4px solid blueViolet;
  }
`;

const Header = (props)=> {
    return (
        <Wrapper>
            <h1>Fruit Emporium</h1>
            <nav>
                <StyledLink activeClassName='active' exact to="/">
                    Home
                </StyledLink>
                <StyledLink activeClassName='active' exact to="/about">
                    About
                </StyledLink>
            </nav>
        </Wrapper>
    )
}

export default Header;
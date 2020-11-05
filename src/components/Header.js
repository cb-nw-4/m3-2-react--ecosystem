import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0 15px;
  color: blueViolet;
  font-weight: bold;
`;

const Header = (props)=> {
    return (
        <Wrapper>
        <h1>Fruit Emporium</h1>
        <nav>
            <StyledLink to="/">
                Home
            </StyledLink>
            <StyledLink to="/about">
                About
            </StyledLink>
        </nav>
        </Wrapper>
    )
}

export default Header;
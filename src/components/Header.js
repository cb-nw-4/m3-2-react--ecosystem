import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Logo = styled.h1`
    position: relative;
    left: 80px;
    font-size: 50px;
`;

const StyledLink = styled(NavLink)`
    position: relative;
    margin-right: 80px;
    padding-bottom: 5px;
    font-size: 25px;
    font-weight: bold;
    text-decoration: none;
    color: rgb(117, 26, 255);
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = () => {
    return (
        <HeaderContainer>
        <Logo>Fruit Emporium</Logo>
        <div>
        <StyledLink 
            exact to='/'
            activeStyle={{
                color: 'rgb(255, 51, 204)',
                borderBottom: 'solid rgb(255, 51, 204) 5px'
            }}
        >
        Home
        </StyledLink>
        <StyledLink 
            exact to='/about'
            activeStyle={{
                color: 'rgb(255, 51, 204)',
                borderBottom: 'solid rgb(255, 51, 204) 5px'
            }}
        >
        About
        </StyledLink>
        <StyledLink 
            exact to='/sellers'
            activeStyle={{
                color: 'rgb(255, 51, 204)',
                borderBottom: 'solid rgb(255, 51, 204) 5px'
            }}
        >
        Sellers
        </StyledLink>
        </div>
        </HeaderContainer>
    );
}

export default Header;
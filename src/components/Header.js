import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 1px;
`;
const Title = styled.h1`
    color: black;
    font-size: 48px;
    font-family: sans-serif;
    text-align: left;
    position: absolute;
    left: 10px;
`;

const MenuContainer = styled.ul`
    display: inline-flex;
    justify-content: flex-end;
    position: absolute;
    left: 1200px;
    top: 40px;
`;

const MenuItem = styled.li`
    color: #9966ff;
    font-size: 24px;
    font-family: sans-serif;
    list-style: none;
    align-self: flex-end;
    padding: 0 10px 0;

    &:active {
        color: #ff3399;
        border-bottom: 2px solid #ff3399;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Title>Fruit Emporium</Title>
            <MenuContainer>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <MenuItem>Home</MenuItem>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                    <MenuItem>About</MenuItem>
                </Link>
            </MenuContainer>
        </HeaderContainer>
    )
}


export default Header;

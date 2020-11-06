import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.p`
    font-size: 2rem;
    font-weight: 800;
    display: inline;
    margin:0;
    padding-top: 20px;
`;

const StyledLink = styled(Link)`
    padding: 0px 10px;
    font-size: 1.25rem;
    font-weight: bold;
    text-decoration: none;
`;

const HeaderStyle = styled.nav`
    display:flex;
    align-items:flex-end;
    justify-content: space-between;
    padding: 20px 0;
    `;

const Header = (props) => {
    return (
    <HeaderStyle>
        <Logo>Fruit Emporium</Logo>
        <div>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
        </div>
    </HeaderStyle>
    );
};

export default Header;
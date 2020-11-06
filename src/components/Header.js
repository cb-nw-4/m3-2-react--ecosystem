import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.p`
    font-size: 2.75rem;
    font-weight: 900;
    display: inline;
    margin:0;
    padding-top: 20px;
`;

const StyledLink = styled(Link)`
    padding: 0px 20px;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
`;

const HeaderStyle = styled.nav`
    display:flex;
    align-items:flex-end;
    justify-content: space-between;
    padding: 20px 0;
    margin-bottom: 3.25rem;
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
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import styled from 'styled-components';

const Header=()=>{
    return(
        <Bar>
            <Paragraph>Fruit Emporium</Paragraph>
            <Nav>
                <StyledLink exact to='/' activeClassName="active">Home</StyledLink>
                <StyledLink to='/about'>About</StyledLink>
            </Nav>
        </Bar>
    );
}

const Paragraph=styled.p`
    font-size:3.5em;
    margin-block-start: 0em;
    margin-block-end: 0em;
    line-height:1.2;
`;

const Bar=styled.div`
    display:flex;
    justify-content:space-between;
    padding:30px 0px 30px 0px;
`;

const Nav=styled.nav`
    display:flex;
    padding-top:30px;
    justify-content:space-between;
    width:15%;
`;

const StyledLink = styled(NavLink)`
    color:blueviolet;
    text-decoration:none;
    &:hover, &.active{
        color:tomato;
        text-decoration: underline;
    } 
`;

export default Header;


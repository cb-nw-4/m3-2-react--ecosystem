import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Header=()=>{
    return(
        <Bar>
            <Paragraph>Fruit Emporium</Paragraph>
            <Nav>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/about'>About</StyledLink>
            </Nav>
        </Bar>
    );
}

const Paragraph=styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size:3.5em;
    margin-block-start: 0em;
    margin-block-end: 0em;
`;

const Bar=styled.div`
    display:flex;
    justify-content:space-between;
    padding:30px;
`;

const Nav=styled.div`
    display:flex;
    padding-top:30px;
    justify-content:space-between;
    width:15%;
`;

const StyledLink = styled(Link)`
    color:blueviolet;
    text-decoration: none;
    &:hover, &:active{
        color:tomato;
    } 
`;

export default Header;


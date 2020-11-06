import React from 'react'; 
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderStyled = styled.div`
width:100%; 
display: flex; 
justify-content:space-between;
padding: 10px;
` 

const NavLinkStyled = styled(NavLink)`
text-decoration: none; 
color: #4700e0;
padding:15px;
font-size:15px;
font-weight:bold;
`

const HeaderLinks = styled.header`
display: flex; 
align-items: center;
`

const Header = () => {
    return (
        <HeaderStyled> 
            <h1>Fruit Emporium</h1>
            <HeaderLinks>
                <NavLinkStyled exact to="/" activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                    borderBottom: "2px solid red"
                }}>Home</NavLinkStyled>
                <NavLinkStyled to="/about" activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                    borderBottom: "2px solid red"
                }}>About</NavLinkStyled>
            </HeaderLinks>
        </HeaderStyled>
    );
}; 

export default Header;
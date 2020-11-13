import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const NavDiv = styled.div`
width:100%; 
display: flex; 
justify-content:space-between;
padding: 10px;
` 

const LinkStyled = styled(Link)`
text-decoration: none; 
color: #3c00e0;
padding:15px;
font-size:15px;
font-weight:bold;
`

const Headerstyle = styled.header`
display: flex; 
align-items: center;
`

const Header = () => {
    return (
        <NavDiv> 
            <h1>Fruit Emporium</h1>
            <Headerstyle>
                <LinkStyled exact to="/" activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                    borderBottom: "2px solid red"
                }}>Home</ LinkStyled>
                <LinkStyled to="/about" activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                    borderBottom: "2px solid red"
                }}>About</ LinkStyled>
            </Headerstyle>
        </NavDiv>
    );
}; 




export default Header;

import React from 'react';

import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
`

const NavItemsContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    list-style-type: none;

    & a {
        text-decoration: none;
    }

    & .active {
        color: navy;
        border-bottom: 3px solid navy;
        font-weight: bold;
    }
`

const Logo = styled.h1`
    font-size: 30px;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    margin: 10px 20px;
    width: 400px;
`

const NavItems = styled.li` 
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    color: indigo;
    font-weight: lighter;
    padding: 0px 20px;
`

const AboutLink = styled(NavItems)`
    margin: 0px 20px;
    position: relative;
`

const StyledLink = styled(NavLink)`
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    color: indigo;
    font-weight: lighter;
    padding: 0px 20px;
    text-decoration: none;
`

const Header = (props) => {
    return (
        <div>
            <Wrapper>
                <Logo>
                    Fruit Emporium
                </Logo>
            
                <NavItemsContainer>
                    <NavItems>
                        <NavLink exact activeClassName="active" to="/" >Home</NavLink>
                    </NavItems>
                
                    <AboutLink>
                        <NavLink exact activeClassName="active" to="/about" >About</NavLink>
                    </AboutLink>
                </NavItemsContainer>

            </Wrapper>
        </div>
    )
}


export default Header;

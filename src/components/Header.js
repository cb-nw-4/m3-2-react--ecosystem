import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import About from './About';

import Homepage from './Home';

// import { render } from 'react-dom';


const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    border: 1px solid blue;
    width: 100%;
`;

const NavItemsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`

const Logo = styled.h1`
    font-size: 24px;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    margin: 10px 20px;
`

const NavItems = styled.h4` 
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    color: indigo;
    font-weight: lighter;
    padding: 0px 20px;
    /* margin-left: 70%; */
`

const AboutLink = styled(NavItems)`
    margin: 0px 20px;
    position: relative;

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
                        <Link to="/">Home</Link>
                    </NavItems>
                
                    <AboutLink>
                        <Link to="/about">About</Link>
                    </AboutLink>
                </NavItemsContainer>

            </Wrapper>
        </div>
    )
}


export default Header;
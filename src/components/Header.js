import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100vw;

    .nav-links {
        display: flex;
        margin-right: 20px;
    }
    & icon {
        font-size: 2.5em;
        font-weight: bold;
    }

    .link{
        text-decoration: none;
        font-size: 1.2em;
        font-weight: bold;
        margin: 0 20px;
        color: purple;
    }

    .selected{
        color: red;
        border-bottom: red solid 2px;
        margin-bottom: 20px;
    }
`;


const Header = (props) => {
    return (
        <Nav>
            <icon>Fruit Emporium</icon>
            <div className='nav-links'>
                <NavLink className='link' activeClassName='selected' exact to='/' > Home </NavLink>
                <NavLink className='link' activeClassName='selected' to='/about' activeStyle={{
                    color: 'red',
                }}
                >
                    About
                </NavLink>
            </div>
        </Nav>
    );
}

export default Header;
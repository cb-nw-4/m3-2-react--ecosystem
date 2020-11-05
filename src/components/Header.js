import React from 'react';
import styled from 'styled-components';
import { Link as LinkBase } from 'react-router-dom';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    border: 1px solid red;
    width: 100vw;

    & div {
        display: flex;
    }
    & icon {
        font-size: 2.5em;
        font-weight: bold;
    }
`;

const Link = styled(LinkBase)`
    text-decoration: none;
    font-size: 1.2em;
    margin: 0 2vw;
`;

const Header = (props) => {
    return (
        <Nav>
            <icon>Fruit Emporium</icon>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </div>
        </Nav>
    );
}

export default Header;
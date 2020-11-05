import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    border: 1px solid red;

    & div {
        display: flex;
    }
    & icon {
        font-size: 2.5em;
        font-weight: bold;
    }
    & p{
        font-size: 1.2em;
        margin: 0 1vw;
    }
`;

const Header = (props) => {
    return (
        <Nav>
            <icon>Fruit Emporium</icon>
            <div>
                <p><Link to='/'>Home</Link></p>
                <p><Link to='/about'>About</Link></p>
            </div>
        </Nav>
    );
}

export default Header;
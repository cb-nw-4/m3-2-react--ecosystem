import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 50px;

    & h1 {
        font-size: 50px;
    }

    & a {
        font-size: 20px;
        margin-left: 25px;
        text-decoration: none;
        font-weight: bold;
    }
`;

const Header = () => {
    return (
        <Section>
            <h1>Fruit Emporium</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </Section>
    )
  };
  

export default Header;
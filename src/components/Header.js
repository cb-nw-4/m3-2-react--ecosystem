import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 120px;
  list-style-type: none;

  & a {
    text-decoration: none;
  }
`;

const Header = (props) => {
  return (
    <HeaderStyle>
      <h1>Fruit Emporium</h1>
      <nav>
        <Ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </Ul>
      </nav>
    </HeaderStyle>
  );
}

export default Header;

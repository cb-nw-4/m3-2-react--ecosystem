import React from 'react';
import { NavLink } from 'react-router-dom';
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

  & .selected {
    color: darksalmon;
    border-bottom: 3px solid darksalmon;
  }

  & :not(.selected) {
    color: gray;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Fruit Emporium</h1>
      <nav>
        <Ul>
          <li>
            <NavLink exact activeClassName='selected' to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName='selected' to='/about'>About</NavLink>
          </li>
        </Ul>
      </nav>
    </HeaderStyle>
  );
}

export default Header;

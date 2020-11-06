import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';




const DivBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;


    & h1{
        margin: 5px
    }
    & ul{
        display: flex;
        margin: 0 20px;
    }

    & li{
        margin: 20px;
        list-style: none
    }

   

`

const NavSelected = styled(NavLink)`

        text-decoration: none;
        color: darkblue;
        font-size: 24px;
    
     &.active{
        border-bottom: 4px solid pink;
        color: plum;
    }
`

const NavBar= ()=>{
    return (
        <DivBar>
            <h1>FruitEmporium</h1>
            <ul>
                <li>
                    <NavSelected exact to="/" activeClassName='active'>Home</NavSelected>
                </li>
                <li>
                    <NavSelected to="/about" activeClassName='active'> About</NavSelected>
                </li>
            </ul>
            
        </DivBar>
    )

}
 
export default NavBar;
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { createGlobalStyle } from 'styled-components';
import Header from './Header.js'
import Homepage from './Homepage.js'
import About from './About.js'
import ItemDetails from './ItemDetails.js'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 100px;
    font-family: 'Raleway';
  }
`;

const App = (props) => {
  return (
    <Router>
    <GlobalStyle/>

    <Header/>
      <Switch>
      <Route path="/items/:itemId">
        <ItemDetails/>
      </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/">
          <Homepage/>
        </Route>
      </Switch>

    </Router>
    );
};

export default App;

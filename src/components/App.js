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
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/items/:itemId">Item</Route>
        <Route path="/">
          <Homepage/>
        </Route>
      </Switch>

    </Router>
    );
};

export default App;

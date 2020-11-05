import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import Header from './Header';
import Home from './Home';
import About from './About';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Raleway', sans-serif;
  }
`;

const App = (props) => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='items/:itemId'></Route>
      </Switch>
    </Router>
  );
};

export default App;

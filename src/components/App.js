import React from 'react';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import ListingGrid from './ListingGrid.js'

const App = (props) => {
  return (
    <>
      <Router>
        <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/items/:itemId"></Route>
          </Switch>
      
      </Router>
    </>
  )
  
};

export default App;

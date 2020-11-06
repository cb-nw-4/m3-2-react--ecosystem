import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import styled from 'styled-components';

import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import GlobalStyles from './GlobalStyles.js'
import ItemDetails from './ItemDetails.js'

const App = (props) => {
  return (
    <Section>
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/items/:itemId"><ItemDetails /></Route>
        </Switch>
      </Router>
    </Section>
  )
  
};

const Section=styled.section`
  margin-left:13%;
  margin-right:13%;
`;

export default App;

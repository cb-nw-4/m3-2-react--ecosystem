import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Raleway', sans-serif;
  }

  body {
    margin: 0px;
  }
`;


const App = (props) => {
  return (
  <Router>
     <GlobalStyle />
     <Header/>
    <Switch>
      <Route path="/">Homepage</Route>
      <Route path="/about">About</Route>
    </Switch>
  </Router>);
};

export default App;

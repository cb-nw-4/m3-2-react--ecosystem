import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Header.js'

const App = (props) => {
  return (
    <Router>

    <Header/>
      <Switch>
        <Route path="/about">About</Route>
        <Route path="/items/:itemId">Item</Route>
        <Route path="/">Homepage</Route>
      </Switch>

    </Router>
    );
};

export default App;

import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header';

import About from './About';

import Homepage from './Home';

import ItemDetails from './ItemDetails';


const App = (props) => {
  return <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/items/:itemId">
        <ItemDetails />
      </Route>
      <Route path="/">
        <Homepage />
      </Route>
    </Switch>
  </BrowserRouter>
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';

const App = ({items, sellers}) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home items={items}/>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        {/* <Route path='/items/:itemId'>
          <ItemDetails />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;

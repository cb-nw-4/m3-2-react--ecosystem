import React from 'react';

import Header from './Header';

import About from './About';

import Homepage from './Home';

import { 
  BrowserRouter,
  Switch, 
  Route 
} from 'react-router-dom';



const App = (props) => {
  return <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/items/:itemId">An item</Route>
      <Route path="/">
        <Homepage />
      </Route>
    </Switch>
  </BrowserRouter>
};

export default App;

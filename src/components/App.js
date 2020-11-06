import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import GlobalStyles from './GlobalStyles';

import Header from './Header';
import About from './About';
import Homepage from './Home';
import ItemDetails from './ItemDetails';

const App = (props) => {
  return (
    <Router>
    <Header></Header>
    <Switch>
      <Route path='/items/:itemID'><ItemDetails /></Route>
      <Route path='/about'><About /></Route>
      <Route path='/'><Homepage /></Route>
    </Switch>
    <GlobalStyles/>
    </Router>
  );
};

export default App;

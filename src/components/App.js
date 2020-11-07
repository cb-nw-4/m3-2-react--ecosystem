import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header.js';

import Homepage from './Homepage.js';

import About from './About.js';

import ItemDetails from './ItemDetails.js';

// import { createGlobalStyle } from 'styled-components';

// @font-face {
//   font-family: 'Lato';
//   font-style: 'none';
//   font-weight: 'none';
//   src: url('src/Lato/Lato-Regular.ttf');
// }

// const GlobalStyle = createGlobalStyle`
//   * {
//     font-family: 'Lato', sans-serif;
//   }
// `;

const App = (props) => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/items/:itemId">
            <ItemDetails />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Homepage 
            items={props.items}
            />
          </Route>
        </Switch>
      </div>
    </Router>

  )
};

export default App;


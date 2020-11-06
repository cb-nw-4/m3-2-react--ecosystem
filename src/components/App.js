import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import About from './About';
import Home from './Home';
import styled from 'styled-components';
import ItemDetails from './ItemDetails';


const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Raleway', sans-serif;
  }

  body {
    margin: 0px 30px;
  }
`;

const Wrapper = styled.div` 
  max-width: 900px;
  margin: auto;
`;

const App = (props) => {
  return (
  <Router>
     <GlobalStyle />
    < Wrapper>
     <Header/>
    <Switch>    
      <Route path="/items/:itemId">
        <ItemDetails/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/">
        <Home items={props.items}/>
      </Route>
      
    </Switch>
    </Wrapper>
  </Router>);
};

export default App;

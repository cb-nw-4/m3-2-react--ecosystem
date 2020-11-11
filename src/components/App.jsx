import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
import ItemDetails from "./ItemDetails";
import styled from "styled-components";

const App = (props) => {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage itemsData1={props.itemsData} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/items/:itemId">
            <ItemDetails />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 80px;
  margin-left: 60px;
  margin-right: 40px;
  padding: 0;
`;

export default App;

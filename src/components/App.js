import React from "react";
import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
import ItemDetails from "./ItemDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { items } from "../data";

const App = (props) => {
  return (
    <>
      <Router>
        <Header></Header>
        <div>
          <Switch>
            <Route path="/items/:itemId">
              <ItemDetails items={items} />
            </Route>
            <Route exact path="/">
              <Homepage></Homepage>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;

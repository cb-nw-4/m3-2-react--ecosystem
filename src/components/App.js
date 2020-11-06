import React from "react";
import { BrowserRouter as Router, Switch, Route,  useParams } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Home from "./Home";
import GlobalStyles from "./GlobalStyles";
import ItemDetails from './ItemDetails'; 

function ItemPost() {
  let { itemId } = useParams()
  return <ItemDetails itemId={itemId}/>
}

const App = (props) => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" exact={true}>
          
          <Home />
        </Route>
        <Route path="/about">
          
          <About />
        </Route> 
        <Route path="/:itemId">  
        <ItemPost />
        </Route>
      </Switch>
      <GlobalStyles />
    </Router>
  );
};

export default App;

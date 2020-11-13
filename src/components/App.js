import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from './Homepage';
import About from './About';
import ItemDetails from './ItemDetails';

const App = (props) => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/"><Homepage items={props.items} />
          </Route>
          <Route path="/about"><About />
          </Route>
            <Route path="/items/:itemId"><ItemDetails />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
};








export default App;

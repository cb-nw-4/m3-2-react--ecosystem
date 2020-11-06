import { 
  BrowserRouter as Router,  
  Route, 
  Switch 
} from 'react-router-dom';
import React from 'react';

import GlobalStyles from './GlobalStyles';
import Header from './Header';
import Homepage from './Home';
import About from './About';
import ItemDetails from './ItemDetails';

const App = (props) => {
  // console.log(props,"App props");
  return (
    <>
      <GlobalStyles/>
      <Router>
        <Header /> 
        <main> 
          <Switch> 
            <Route path="/items/:itemId"><ItemDetails/></Route>
            <Route path="/about"><About/></Route>
            <Route path="/"><Homepage items = {props.items}/></Route>
          </Switch>
        </main>
      </Router>
    </>
  );
};


export default App;

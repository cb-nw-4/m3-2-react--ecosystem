import React from 'react';

import { useParams } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Header';
import Homepage from './Home';
import About from './About';
import ItemDetails from './ItemDetails';
import Sellers from './SellerGrid';
import Seller from './SellerDetails';


function Item () {
  let { itemId } = useParams()
  return <ItemDetails itemId={itemId}/>
}

// function Seller () {
//   let { SellerId } = useParams()
//   return <ItemDetails itemId={SellerId}/>
// }

const App = () => {
  return (
  <div className='wrapper'>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/items/:itemId">
          <Item />
        </Route>
        {/* <Route exact path="/sellers">
          <Sellers />
        </Route>
        <Route exact path="/sellers/:sellerId">
          <Seller />
        </Route> */}
      </Switch>
    </Router>
  </div>
  );
};

export default App;

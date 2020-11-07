import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Home from "./Home";
import GlobalStyles from "./GlobalStyles";
import ItemDetails from "./ItemDetails";
import SellersDetails from "./SellersDetails";

function ItemPost() {
  let { itemId } = useParams();
  return <ItemDetails itemId={itemId} />;
}
function SellerPost() {
  let { sellerIds } = useParams();
  return <SellersDetails sellerIds={sellerIds} />;
}

const App = (props) => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        
        <Route path="/about">
          <About />
        </Route> 
        <Route path="/sellers/:sellerIds">
          <SellerPost />
        </Route>
        <Route path="/items/:itemId">
          <ItemPost />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
      <GlobalStyles />
    </Router>
  );
};

export default App;

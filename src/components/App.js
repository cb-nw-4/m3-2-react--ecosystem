import React from 'react';
import Header from './Header';
import { BrowserRouter , Switch, Route} from "react-router-dom";
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import ItemsDetails from './ItemsDetails';
import SellersDetails from './SellersDetails';



const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <div className="content" >
          
            <Switch>
              <Route exact path="/sellers/:sellerId"  >
                <SellersDetails/>
              </Route>
              <Route exact path="/items/:itemId"  >
                <ItemsDetails/>
              </Route>
              <Route exact path="/about">
                <AboutPage /> 
              </Route>
              <Route exact path="/" >
                <HomePage /> 
              </Route>
                              
            </Switch>
          
         
        </div>
        
      </BrowserRouter>
     
    </>
  );
};

export default App;

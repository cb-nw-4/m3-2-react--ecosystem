import React from 'react'; 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header'; 
import About from './About'; 
import Home from './Home';  
import GlobalStyles from "./GlobalStyles"; 
// import itemList from './ItemList';


const App = (props) => {
  return (  
    <Router>
      <Header></Header>
    <Switch>
      <Route path="/" exact={true}> <Home /> </Route> 
      <Route path="/about"> <About /> </Route> 
    </Switch>  
    <GlobalStyles />
    </Router>
  )
};

export default App;

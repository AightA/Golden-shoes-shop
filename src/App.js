import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';

const App = () => {
  return (
  <Router>
    <CssBaseLine/>
    <NavBar/>
    <Switch>
      <Route path="/">
       <Home />
      </Route>
    </Switch>
  </Router>
  )  
}

export default App

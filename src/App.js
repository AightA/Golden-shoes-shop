import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Container from '@material-ui/core/Container';
import Home from './pages/Home';

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
  media: {
    height: 140,
  },
});

const App = () => {
  const classes = useStyles();

  return (
  <Router>
    <CssBaseLine/>
    <NavBar/>
    <Container className={classes.root}>
    <Switch>
      <Route path="/">
       <Home />
      </Route>
    </Switch>
    </Container>
  </Router>
  )  
}

export default App

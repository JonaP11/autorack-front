import {Container, makeStyles} from '@material-ui/core';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import {Navigation} from './components/elements/nav/Main';
import {Calculator} from './components/pages/Calculator';
import {Homepage} from './components/pages/Homepage';
import {SignIn} from './components/pages/SignIn';
import {SignUp} from './components/pages/SignUp';
import AppPaths from './const/paths';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const PageContent = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Route exact path={AppPaths.HOME}>
        <Homepage />
      </Route>
      <Route exact path={AppPaths.SIGN_UP}>
        <SignUp />
      </Route>
      <Route exact path={AppPaths.SIGN_IN}>
        <SignIn />
      </Route>
      <Route exact path={AppPaths.CALC}>
        <Calculator/>
      </Route>
    </Container>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>

      <PageContent/>
    </BrowserRouter>
  );
};

export default App;

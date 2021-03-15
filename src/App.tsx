import {makeStyles} from '@material-ui/core';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import {Navigation} from './components/elements/nav';
import {Calculator} from './components/pages/calculator';
import {Sample} from './components/pages/sample';
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
    <div className={classes.root}>
      <Route exact path={AppPaths.HOME}>
        <Sample/>
      </Route>
      <Route exact path={AppPaths.CALC}>
        <Calculator/>
      </Route>
    </div>
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

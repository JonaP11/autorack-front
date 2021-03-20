import React from 'react';
import {useSelector} from 'react-redux';
import {Route, Redirect, RouteProps} from 'react-router-dom';

import {RootState} from '../../store';

interface Props extends RouteProps {
    component: any;
}

export const PrivateRoute = ({component: Component, ...rest}:Props) => {
  const {authenticated} = useSelector((state: RootState) => state.auth);

  return (
    <Route {...rest} render={(props) => authenticated ? <Component {...props} /> : <Redirect to="/signin" />} />
  );
};

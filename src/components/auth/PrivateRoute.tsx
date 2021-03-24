import React from 'react';
import {useSelector} from 'react-redux';
import {Route, Redirect, RouteProps} from 'react-router-dom';

import AppPaths from '../../const/paths';
import {RootState} from '../../state/store';
import {RouteComponentProps} from './props';

type PrivateRouteProps = RouteProps & RouteComponentProps;

export const PrivateRoute = ({component: Component, ...rest}: PrivateRouteProps) => {
  const {user} = useSelector((state: RootState) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) => user ? <Component {...props} /> : <Redirect to={AppPaths.SIGN_IN} />} />
  );
};

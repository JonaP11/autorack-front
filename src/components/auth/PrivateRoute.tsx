import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route, RouteProps} from 'react-router-dom';

import AppPaths from '../../const/paths';
import {RootState} from '../../state/store';
import {RouteComponentProps} from './props';

type PrivateRouteProps = RouteProps & RouteComponentProps;

export const PrivateRoute = ({component: Component, ...rest}: PrivateRouteProps) => {
  const {user} = useSelector((state: RootState) => state.auth);

  if (!user) {
    return <Redirect to={AppPaths.SIGN_IN}/>;
  }

  return (
    <Route
      render={(props) => <Component {...props} />}
      {...rest}
    />
  );
};

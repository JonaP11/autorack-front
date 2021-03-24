import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import AppPaths from '../../const/paths';

import {RootState} from '../../state/store';
import {RouteComponentProps} from './props';

type PublicRouteProps = RouteProps & RouteComponentProps;

export const PublicRoute = ({component: Component, ...rest}: PublicRouteProps) => {
  const {user} = useSelector((state: RootState) => state.auth);

  if (user) {
    // FIXME: Testing placeholder, to be removed
    return <Redirect to={AppPaths.CALC}/>;
  }

  return (
    <Route
      render={(props) => <Component {...props} />}
      {...rest}
    />
  );
};

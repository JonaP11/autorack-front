import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

import AppPaths from '../../../const/paths';
import {RootState} from '../../../state/store';
import {RouteCommonProps} from './props';

type PrivateRouteProps = RouteCommonProps;

const renderRoute = ({children}: React.PropsWithChildren<PrivateRouteProps>) => () => {
  const {user} = useSelector((state: RootState) => state.auth);

  if (user == null) { // `==` for checking `null` or `undefined`
    return <Redirect to={AppPaths.SIGN_IN}/>;
  }

  return children;
};

export const PrivateRoute = (props: React.PropsWithChildren<PrivateRouteProps>) => {
  return (
    <Route exact {...props} render={renderRoute(props)} />
  );
};

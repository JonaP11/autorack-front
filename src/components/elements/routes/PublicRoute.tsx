import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

import AppPaths from '../../../const/paths';
import {RootState} from '../../../state/store';
import {RouteCommonProps} from './props';

type PublicRouteProps = RouteCommonProps;

const renderRoute = ({children}: React.PropsWithChildren<PublicRouteProps>) => () => {
  const {user} = useSelector((state: RootState) => state.auth);

  if (user != null) { // `==` for checking `null` or `undefined`
    return <Redirect to={AppPaths.CALC}/>;
  }

  return children;
};

export const PublicRoute = (props: React.PropsWithChildren<PublicRouteProps>) => {
  return (
    <Route exact {...props} render={renderRoute(props)} />
  );
};

import React from 'react';
import {useSelector} from 'react-redux';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import {RootState} from '../../store';

import AppPaths from '../../const/paths';

interface Props extends RouteProps {
  component: any;
}

export const PublicRoute = ({component: Component, ...rest}:Props) => {
  const {authenticated} = useSelector((state: RootState) => state.auth);

  return (
    <Route {...rest} render={(props) => !authenticated ? <Component {...props} /> :
      <Redirect to={AppPaths.CALC} />} />
  );
};

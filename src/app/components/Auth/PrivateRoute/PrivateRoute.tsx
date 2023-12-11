import React, { ComponentType, FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

interface IPrivateRouteProps extends RouteProps {
  component: ComponentType<any>;
}

export const PrivateRoute: FC<IPrivateRouteProps> = ({ component }, props) => {
  return <Route component={withAuthenticationRequired(component)} {...props} />;
};

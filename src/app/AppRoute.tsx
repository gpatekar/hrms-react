import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { BasePage, Dashboard, Employee, Login, Formik, Editor } from './pages';
import { PrivateRoute } from './components';
import Auth0ProviderWithHistory from '../auth/Auth0ProviderWithHistory';

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Auth0ProviderWithHistory>
          <BasePage>
            <Route path="/employee" component={Employee} />
            <Route path="/formik-demo" component={Formik} />
            <Route path="/editor-demo" component={Editor} />
            <Route exact path="/" component={Dashboard} />    
          </BasePage>
        </Auth0ProviderWithHistory>
      </Switch>
    </BrowserRouter>
  );
};

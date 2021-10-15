import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { BasePage, Dashboard } from './pages';

export const AppRoutes: React.FC = () => {
  return (
    <BasePage>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
        </Switch>
      </BrowserRouter>
    </BasePage>
  );
};

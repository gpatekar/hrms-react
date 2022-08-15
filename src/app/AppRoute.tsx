import React from 'react';
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';

import { BasePage, Dashboard, Employee } from './pages';

export const AppRoutes: React.FC = () => {
  function BlogPost() {
    let { slug }: any = useParams();
    return <div>Now showing post {slug}</div>;
  }

  return (
    <BasePage>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/employee" component={Employee}>
          </Route>
        </Switch>
      </BrowserRouter>
    </BasePage>
  );
};

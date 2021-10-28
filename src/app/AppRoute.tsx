import React from 'react';
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';

import { BasePage, Dashboard, EmployeeDetails, EmployeeList } from './pages';



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
          <Route exact path="/employee-details/" component={EmployeeDetails}></Route>
          <Route exact path="/employee-details/:id" component={EmployeeDetails}></Route>
          <Route exact path="/employee-list" component={EmployeeList}></Route>
        </Switch>
      </BrowserRouter>
    </BasePage>
  );
};

import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { EmployeeList } from './EmployeeList/EmployeeList';
import { EmployeeDetails } from './EmployeeDetails/EmployeeDetails';

export const Employee = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/employee-list`}>
          <EmployeeList />
        </Route>
        <Route exact path={`${path}/employee-details:id`}>
          <EmployeeDetails />
        </Route>
      </Switch>
    </>
  );
};

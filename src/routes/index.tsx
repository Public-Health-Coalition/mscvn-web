import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

export interface RoutesProps {}

const Routes: FC<RoutesProps> = (_props: RoutesProps) => (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

Routes.defaultProps = {};

export default Routes;

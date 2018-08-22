import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from "./Dashboard";
import FourOhFour from './FourOhFour';

export const AppRouter = () =>
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/404" component={FourOhFour}/>
      <Route component={FourOhFour}/>
    </Switch>
  </Router>;
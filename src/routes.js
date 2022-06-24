import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/home';

const Routes = props => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} />
    </Switch>
  );
};

export default Routes;

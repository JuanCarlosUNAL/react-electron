import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import FakeContainer from './FakeContainer';
import LoginLogupScreen from '../containers/LoginLogupScreen';

const Routes: React.FC = (): JSX.Element => (
  <Router>
    <Switch>
      <Route path="/users">
        <FakeContainer title="Users" />
      </Route>
      <Route path="/">
        <LoginLogupScreen />
      </Route>
    </Switch>
  </Router>
);

export default Routes;

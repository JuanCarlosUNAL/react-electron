import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginLogupScreen from '../containers/LoginLogupScreen';
import PostsScreen from '../containers/PostsScreen';

const Routes: React.FC = (): JSX.Element => (
  <Router>
    <Switch>
      <Route path="/users">
        <PostsScreen />
      </Route>
      <Route path="/">
        <LoginLogupScreen />
      </Route>
    </Switch>
  </Router>
);

export default Routes;

import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import FakeContainer from './Routes/FakeContainer';
import LoginLogupScreen from './containers/LoginLogupScreen';

const Renderer: React.FC = () => (
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

export default Renderer;

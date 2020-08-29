import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FakeContainer from './Routes/FakeContainer';
import LoginLogupScreen from './containers/LoginLogupScreen';

const Renderer: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/">
        <LoginLogupScreen />
      </Route>
      <Route path="/users">
        <FakeContainer title="Users" />
      </Route>
      <Route path="/">
        <FakeContainer title="home" />
      </Route>
    </Switch>
  </Router>
);

export default Renderer;

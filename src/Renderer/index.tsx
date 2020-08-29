import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FakeContainer from './Routes/FakeContainer';

const Renderer: React.FC = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/about">
        <FakeContainer title="About" />
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

import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginLogup from '../controllers/LoginLogupEnhancer';
import NewTimer from '../controllers/NewTimerEnhancer';
import TimersDashboards from '../controllers/TimersDashboard';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/users">
        <TimersDashboards />
        <Switch>
          <Route path="/users/newCard">
            <NewTimer />
          </Route>
        </Switch>
      </Route>
      <Route path="/">
        <LoginLogup />
      </Route>
    </Switch>
  </Router>
);

export default Routes;

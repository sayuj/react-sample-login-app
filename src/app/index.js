import React from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import LocalStorage from 'react-localstorage';

import App from './components/App';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

render(<Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
    </Route>

  </Router>, document.getElementById('app'));

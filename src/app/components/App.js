import React from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import Dashboard from './Dashboard';

class App extends React.Component {
    logout() {
      localStorage.setItem('loggedIn', false);
      localStorage.removeItem('currentUser');
      Router.transitionTo('/');
    }

    componentWillMount() {

    }

    render() {
        return(
          <div id="app">
            <div id="header">
              <Link to="login">Login</Link> 
              <Link to="signup"> Signup</Link> 
              <a href="#" onClick={this.logout}> Logout</a>
            </div>
            <div>Status: {localStorage.getItem('loggedIn')}</div>
            <div className="container">
              {this.props.children || <Dashboard />}
            </div>
          </div>
          )
    }
};

export default App;

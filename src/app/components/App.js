import React from 'react';
import {render} from 'react-dom';
import autoBind from 'react-autobind';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import Dashboard from './Dashboard';

class App extends React.Component {
    logout() {
      localStorage.setItem('loggedIn', false);
      localStorage.removeItem('currentUser');
      browserHistory.pushState(null, '/');
    }

    componentWillMount() {

    }

    loggedIn() {
      return localStorage.getItem('loggedIn') == 'true'
    }

    render() {
        var links;
        if(this.loggedIn()) {
          links = <links>
                    <a href="#" onClick={this.logout}>Logout</a>
                  </links>
        }
        else {
          links = <links>
                    <Link to="login">Login</Link>
                    <Link to="signup"> Signup</Link>
                  </links>
        }

        return(
          <div id="app">
            <div id="header">
              { links }
            </div>
            <div className="container">
              {this.props.children || <Dashboard />}
            </div>
          </div>
          )
    }
};

export default App;

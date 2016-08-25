import React from 'react';
import autoBind from 'react-autobind';
import { Router, browserHistory } from 'react-router';

export default class Login extends React.Component{
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  handleSubmit() {
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    if(username == 'test@example.com' && password == 'test123') {
      var currentUser = {
        "username": username
      };

      var jsonData = JSON.stringify(currentUser);
      localStorage.setItem('currentUser', jsonData);
      localStorage.setItem('loggedIn', true);
      // alert("Logged in successfully");
    }
    else {
      alert("Login failed");
    }
    browserHistory.pushState(null, 'dashboard');
  }

  loggedIn() {
    return localStorage.getItem('loggedIn') == 'true'
  }

  render(){
    if(this.loggedIn()) {
      browserHistory.pushState(null, 'dashboard');
    }

    return(
      <form onSubmit={this.handleSubmit} >
        <div className="login">
          <h1>Login...</h1>
          <div>
            <label>Username:</label>
            <input type="text" ref="username" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" ref="password" />
          </div>
          <button>Login</button>
        </div>
      </form>
      )
  }
};

import React from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'

var App = React.createClass({
    render: function() {
        return(
          <div id="app">
            <div id="header"></div>
            <Link to="/login">Login</Link> | 
            <Link to="/signup"> Signup</Link>
            <div className="container">
            </div>
            {this.props.children}
          </div>
          )
    }
});

var Signup = React.createClass({
  handleSubmit: function(){
    alert("signed up");
  },
  render: function(){
    return(
      <div id="signup">
        <h1>Signup</h1>
        <form onClick={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" ref="username" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" ref="password" />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input type="password" ref="password_confirmation" />
          </div>
          <button>Signup</button>
        </form>
      </div>
    );
  }
});

var Login = React.createClass({
  handleSubmit: function() {
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    if(username == 'sayuj@mobme.in' && password == 'mobme123') {
      alert("Logged in successfully");
    }
    else {
      alert("Login failed");
    }
  },
  render: function(){
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
})

render(<Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Route>
  </Router>, document.getElementById('app'));

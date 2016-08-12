import React from 'react';
import autoBind from 'react-autobind';

class Login extends React.Component{
  constructor(props) {
    super(props);
    autoBind(this);
  }

  handleSubmit() {
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    if(username == 'sayuj@mobme.in' && password == 'mobme123') {
      var currentUser = {
        "username": username
      };

      localStorage.setItem('loggedIn', true);
      jsonData = JSON.stringify(currentUser);
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      alert("Logged in successfully");
    }
    else {
      alert("Login failed");
    }
    Router.transitionTo('/dashboard');
  }

  render(){
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

export default Login;

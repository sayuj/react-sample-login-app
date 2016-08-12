import React from 'react';

class Signup extends React.Component {
  handleSubmit(){
    alert("signed up");
  }

  render(){
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
};

export default Signup;

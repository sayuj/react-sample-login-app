import React from 'react';
import autoBind from 'react-autobind';

export default class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    autoBind(this);
  }

  currentUser() {
    var jsonData = localStorage.getItem("currentUser");
    if(jsonData) {
      return JSON.parse(jsonData);
    }
  }

  render(){
    var message;
    if(this.currentUser()) {
      message = "Welcom " + this.currentUser().username + "!";
    }
    else {
      message = "Please login";
    }

    return(
      <div id="dashboard" >
        <span>{message}</span>
      </div>
      )
  }
};

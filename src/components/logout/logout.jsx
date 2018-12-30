import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class LogOut extends Component{
  constructor(props){
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  handleLogOut=()=>{
    axios.get(this.props.address+'/logout').then((response) => {
      console.log("logout");
      this.props.handleLogin(false,null);
    })
  }
  render(){
    return(
      <div>
        {this.handleLogOut()}
        <Redirect to="/loguser"></Redirect>
      </div>
    )
  }
}

export default LogOut;

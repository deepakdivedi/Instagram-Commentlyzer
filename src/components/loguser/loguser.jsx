import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './loguser.css';

class LogUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      username : null,
      password : null,
      address : null,
      errorMessage : null
    };
  }
    handleChange = (e) => {
      this.setState({
        [e.target.id]:e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      axios.put(this.state.address+'/login',{'username':this.state.username,'password':this.state.password}).then((response) => {
        if(response.data.login){
           this.props.handleLogin(response.data.login,this.state.address);
           localStorage.setItem('loginValue',true);
           localStorage.setItem('address',this.state.address);
        }else{
          this.setState({
            errorMessage : response.data.message
          })
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
  render(){
    if(this.props.login){
      return(
        <Redirect to="/"></Redirect>
      )
    }
    return(
      <div className="center login">
        <form className="media-body mt-5" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Email address or Username</label>
            <input name="username" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Email or Username" onChange={this.handleChange}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email or username with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input name="password" type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>Server Adress</label>
            <input name="ipAddress" type="text" className="form-control" id="address" placeholder="0.0.0.0" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <span className="badge badge-danger">{this.state.errorMessage}</span>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label">I agree to <a href="/about">Terms and Conditions</a></label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LogUser;

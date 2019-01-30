import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home/home';
import About from './about/about';
import Github from './github/github';
import LogUser from './loguser/loguser';
import LogOut from './logout/logout'

class Routes extends Component {

  render(){
    return(
      <div>
        <Route path="/Commentlyzer" render={(props) => (<Home login={this.props.login} address={this.props.address}/>)}/>
        <Route path="/about" component={About}/>
        <Route path="/github" component={Github}/>
        <Route path="/loguser" render={(props) => (<LogUser handleLogin={this.props.handleLogin} login={this.props.login}/>)}/>
        <Route path="/logout" render={(props) => (<LogOut handleLogin={this.props.handleLogin} address={this.props.address}/>)}/>
      </div>
    );
  }
}

export default Routes;

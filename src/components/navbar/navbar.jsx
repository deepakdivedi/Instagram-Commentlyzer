import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {

  render(){
    if(this.props.login){
      return(
        <div className="fixed-top">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="d-flex flex-row">
              <div className="p-2 navbar-brand">Commentlyzer</div>
            </div>
            <div className="navbar-collapse collapse justify-content-stretch">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/Commentlyzer" className="nav-link">Homeie</Link>
                </li>
                <li className="nav-item">
                  <Link to="/github" className="nav-link">GitHub</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/logout" className="nav-link">Log Out</Link>
                </li>
              </ul>
            </div>
           </nav>
        </div>
      );
    }else{
      return(
        <div className="fixed-top">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="d-flex flex-row">
              <div className="p-2 navbar-brand">Commentlyzer</div>
            </div>
            <div className="navbar-collapse collapse justify-content-stretch">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/github" className="nav-link">GitHub</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/loguser" className="nav-link">Log In</Link>
                </li>
              </ul>
            </div>
           </nav>
        </div>
      );
    }
  }
}

export default NavBar;

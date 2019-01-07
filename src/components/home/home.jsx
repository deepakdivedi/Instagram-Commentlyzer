import React, { Component } from 'react';
import UserGallery from '../usergallery/usergallery';
import UserData from '../userdata/userdata';
import './home.css'
class Home extends Component {
  render(){
    if(this.props.login){
      return(
        <div className="d-flex flex-row">
          <UserData className="p-2" address={this.props.address}></UserData>
          <UserGallery className="p-2" address={this.props.address}></UserGallery>
        </div>
      );
    }else{
      return(
        <div className="container ml-5">
          <div className="row">
            <div className="col mt-1 ml-2">
              <img src="https://media.giphy.com/media/3o7bu7wtT19WfBAt0Y/giphy.gif" className="float-right" height="600" width="600" alt="GIF not loaded"></img>
            </div>
            <div className="col mt-5">
              <div className="mt-5 mb-3 mr-3">
                <p className="title">Commentlyzer<span className="blink">|</span></p>
              </div>
              <div>
                <center>
                  <p className="description">We don't just read Comments!</p>
                </center>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Home;

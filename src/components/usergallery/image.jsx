import React, { Component } from 'react';

class Image extends Component {
  render(){
    console.log(this.props.url)
    return(
      <div className=" ">
        <img className="img-fluid img-thumbnail col-lg-3" src={this.props.url}  />
      </div>
    );
  }
}

export default Image;

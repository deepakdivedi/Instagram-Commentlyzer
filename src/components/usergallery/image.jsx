import React, { Component } from 'react';

class Image extends Component {
  render(){
    return(
      <div className="d-flex justify-content-center" style = {{width:"240px"}}>
        <img style = {{height: "240px", width:"auto"}} className="" alt ="" src={this.props.url}  />
      </div>
    );
  }
}

export default Image;

import React, { Component } from 'react';

class Image extends Component {
  render(){
    return(
      <div className="d-flex justify-content-center">
        <img style = {{height: "auto", width:"auto"}} className="" alt ="" src={this.props.url}  onClick={()=>{this.props.allowFullScreen(this.props.index)}}/>
      </div>
    );
  }
}

export default Image;

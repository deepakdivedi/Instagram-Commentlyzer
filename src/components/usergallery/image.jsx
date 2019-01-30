import React, { Component } from 'react';
import axios from 'axios';

class Image extends Component {

  constructor (props){
    super(props);
    this.state={
      comment_object : "",
      media_id : "",
      comment_count : "",
      analysis : ""
    }
  }
  componentDidMount = () =>{
    this.setState({
      media_id : this.props.media_id,
      comment_count : this.props.comment_count
    })
  }

  request_server = () =>{
    axios.put(this.props.address+'/analysecomments',{'media_id':this.state.media_id,'comment_count':this.state.comment_count}).then((response) => {
      console.log(response.data)
      this.setState({
        analysis : response.data['Analysis']
      })
    });
  }

  render(){
    if(this.props.fullscreen){
      return(
      <div className="container mt-5 justify-content-center">
        <button className="btn btn-secondary" onClick={()=>{this.props.allowFullScreen(this.props.index)}}>Back</button>
        <div className="card bg-light mr-5 mt-4 border-info" style={{width: '60rem'}}>
          <div className="card-body ">
            <div className="d-flex flex-row">
              <div className="p-2">
                <img style = {{height: "240px", width:"auto"}} className="" alt ="" src={this.props.url}/>
              </div>
              <div className="p-2">
                <div><b className="mr-1">{this.props.likes}</b><span role="img" aria-label="Heart">❤️</span></div>
                <h6>{this.props.caption}</h6>
                <b>{this.props.comments[0]['user']['username']} : </b> {this.props.comments[0]['text']} <br/>
                <b>{this.props.comments[1]['user']['username']} : </b> {this.props.comments[1]['text']}
                <br/>
                <br/>
                <button className="btn btn-primary" onClick={()=>{this.request_server()}}>Check</button>
                <br />
                <br/>
                <label>{this.state.analysis}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }else{
      return(
        <div className="d-flex justify-content-center">
          <img style = {{height: "auto", width:"auto"}} className="" alt ="" src={this.props.url}  onClick={()=>{this.props.allowFullScreen(this.props.index)}}/>
        </div>
      );
    }
  }
}

export default Image;

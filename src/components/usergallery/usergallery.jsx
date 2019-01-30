import React, { Component } from 'react';
import Image from './image';
import LoadMore from './loadmore';
import axios from 'axios';

class UserGallery extends Component {
  constructor(props){
    super(props);
    this.state={
      imageObject : [],
      max_id : "",
      hmp : true,
      fullscreen : false,
      index : "",
      comment_count : "",
      media_id : ""
    }
    this.toggle_full_screen = this.toggle_full_screen.bind(this);
  }
  request_server = () =>{
    axios.put(this.props.address+'/userfeed',{'max_id':this.state.max_id}).then((response) => {
      var temp_obj = this.state.imageObject.concat(response.data.feed);
      this.setState({
        imageObject : temp_obj,
        max_id : response.data.max_id,
        hmp : response.data.hmp,
        comment_count : response.data.comment_count
      })
    });
  }
  componentDidMount = () => {
    this.request_server();
  }

  toggle_full_screen = (index) => {
    var toggle_value = false
    if(!this.state.fullscreen){
      toggle_value = true
    }
    this.setState({
      fullscreen : toggle_value,
      index : index
    })
  }

  render(){
    if(this.state.fullscreen){
      return(
        <Image
      url = {this.state.imageObject[this.state.index]['image_versions2']['candidates'][0]['url']}
      allowFullScreen = {this.toggle_full_screen}
      fullscreen = {this.state.fullscreen}
      caption = {this.state.imageObject[this.state.index]['caption']['text']}
      comments = {this.state.imageObject[this.state.index]['preview_comments']}
      likes = {this.state.imageObject[this.state.index]['like_count']}
      comment_count = {this.state.imageObject[this.state.index]['comment_count']}
      media_id = {this.state.imageObject[this.state.index]['id']}
      address = {this.props.address}></Image>
      );
    }else{
      return(
          <div>
            <div>
              <div className="row mb-1" style = {{overflowY: 'scroll', height: '80vh', marginTop: "20px", marginBottom: "20px", width:"100%"}}>
                {Object.keys(this.state.imageObject).map((i) => {
                  return (
                    <div className="m-auto">
                        <div className="card m-2">
                          <Image
                          key = {i.toString()}
                          url = {this.state.imageObject[i]['image_versions2']['candidates'][1]['url']}
                          allowFullScreen = {this.toggle_full_screen}
                          index = {i}></Image>
                      </div>
                    </div>
                  )
                })}
              </div>
              <LoadMore hmp = {this.state.hmp} request_server = {this.request_server}></LoadMore>
            </div>
          </div>
      );
    }
  }
}

export default UserGallery;

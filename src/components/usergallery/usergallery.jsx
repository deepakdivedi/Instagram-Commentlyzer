import React, { Component } from 'react';
import Image from './image';
import axios from 'axios';

class UserGallery extends Component {
  constructor(props){
    super(props);
    this.state={
      imageObject : false,
      max_id : "",
      hmp : false,
      fullscreen : false,
      index : ""
    }
    this.toggle_full_screen = this.toggle_full_screen.bind(this);
  }
  componentDidMount = () => {
    axios.put(this.props.address+'/userfeed',{'max_id':this.state.max_id}).then((response) => {
      this.setState({
        imageObject : response.data.feed,
        max_id : response.data.max_id,
        hmp : response.data.hmp
      })
      console.log(this.state.imageObject);
    });
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
      fullscreen = {this.state.fullscreen}></Image>
  );
    }else{
      return(
          <div>
            <div>
              <div className="row" style = {{overflowY: 'scroll', height: '80vh', marginTop: "20px", marginBottom: "20px", width:"100%"}}>
                {Object.keys(this.state.imageObject).map((i) => {
                  return (
                    <div className="m-auto">
                      <div className="card m-2">
                      <Image
                      key = {i}
                      url = {this.state.imageObject[i]['image_versions2']['candidates'][1]['url']}
                      allowFullScreen = {this.toggle_full_screen}
                      index = {i}></Image>
                    </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
      );
    }
  }
}

export default UserGallery;

import React, { Component } from 'react';
import Image from './image';
import axios from 'axios';

class UserGallery extends Component {
  constructor(props){
    super(props);
    this.state={
      imageObject : false,
      max_id : "",
      hmp : false
    }
  }
  componentDidMount = () => {
    axios.put(this.props.address+'/userfeed',{'max_id':this.state.max_id}).then((response) => {
      this.setState({
        imageObject : response.data.feed,
        max_id : response.data.max_id,
        hmp : response.data.hmp
      })
      console.log(this.state.imageObject)
    });
  }
  render(){
    return(
        <div>
          <div className="container">
            <div className="row">
              {Object.keys(this.state.imageObject).map((i) => {
                return (
                  <Image
                    key = {i}
                    url={this.state.imageObject[i]['image_versions2']['candidates'][1]['url']}></Image>
                )
              })}
            </div>
          </div>
        </div>
    );
  }
}

export default UserGallery;

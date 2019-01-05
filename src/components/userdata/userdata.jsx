import React, { Component } from 'react';
import axios from 'axios';

class UserData extends Component {
  constructor(props){
    super(props);
    this.state = {
      bio : null,
      userName : null,
      email : null,
      fullName : null,
      userType : null,
      profilePicture : null
    };
  }
  componentDidMount = () => {
    axios.get(this.props.address+'/userinfo').then((response) => {
      this.setState({
        bio : response.data.userData.biography,
        email : response.data.userData.email,
        fullName : response.data.userData.full_name,
        profilePicture : response.data.userData.hd_profile_pic_url_info.url,
        userName : response.data.userData.username,
        userType : response.data.userType,
      })
    });
  }
  render(){
    return(
        <div className="container mt-5">
          <div className="card bg-light mb-3 mt-4 border-info justify-content-center" style={{width: '18rem'}}>
            <h4 className="card-header ">{this.state.fullName}</h4>
              <div className="card-body justify-content-center">
                <img src={this.state.profilePicture} alt="" className="rounded-circle mt-2 mb-5 ml-4" height="200" width="200"></img>
                  <div>
                    {this.state.userName}
                  </div>
                  <div>

                  </div>
                  <div>
                    {this.state.bio}
                  </div>
                  <div>
                    {this.state.email}
                  </div>
              </div>
              <div className="card-footer">
                {this.state.userType}
              </div>
          </div>
        </div>
    );
  }
}

export default UserData;

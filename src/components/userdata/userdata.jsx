import React, { Component } from 'react';
import axios from 'axios';


class UserData extends Component {
  constructor(props){
    super(props);
    this.state = {
      response : null
    };
  }
  componentDidMount = () => {
    axios.get(this.props.address+'/userinfo').then((response) => {
      const data = response.data;
      return this.setState({
        response : data
      })
    });
  }
  render(){
    return(
        <div>{this.state.response}</div>
    );
  }
}

export default UserData;

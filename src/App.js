import React, { Component } from 'react';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Routes from './components/routes';
class App extends Component {

  state = {
    login : false,
    address : null
  }
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = (login,address) => {
    this.setState({
      login : login,
      address : address
    })
  }
  componentDidMount(){

    if(localStorage.getItem('loginValue')!==null){
      if(localStorage.getItem('loginValue')===false){
        this.setState({
          login : false
        })
      }else{
        this.setState({
          login : true,
          address : localStorage.getItem('address')
        })
      }
    }
  }
  render() {
    return (
      <div className="App">
        <div className="mb-5">
          <NavBar login={this.state.login}></NavBar>
        </div>
        <Routes handleLogin={this.handleLogin} login={this.state.login} address={this.state.address}></Routes>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

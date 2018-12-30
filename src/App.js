import React, { Component } from 'react';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Routes from './components/routes';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      login : false,
      address : null
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = (login,address) => {
    this.setState({
      login : login,
      address : address
    })
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

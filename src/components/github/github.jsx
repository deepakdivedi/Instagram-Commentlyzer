import React, { Component } from 'react';

class Github extends Component {
  render(){
    return(
      <div className="container mt-5 justify-content-center">
        <br></br>
        <div className="card bg-light mt-5 border-info" style={{width: '70rem',height:'21rem'}}>
          <div className="card-body ">
            <br></br>
            <br></br>
            <hr></hr>
            <div className="d-flex flex-row justify-content-center">
              <div className="p-2">
                <h1>GitHub</h1>
                <ul>
                  <li>
                    <a href="https://github.com/shubhaemk/Commentlyzer">Instagram React App</a>
                  </li>
                  <li>
                    <a href="https://github.com/shubhaemk/python-flask-instagram-comment">Python Flask Rest Server</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    );
  }
}

export default Github;

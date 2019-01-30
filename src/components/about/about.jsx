import React, { Component } from 'react';

class About extends Component {
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
                <h1>MSc ( Computer Science ) project by</h1>
                <ul>
                  <li>
                    <a href="https://github.com/shubhaemk">Shubham Kamath</a>
                  </li>
                  <li>
                    <a href="https://github.com/deepakdivedi">Deepak Divedi</a>
                  </li>
                  <li>
                    <a href="https://github.com/chinmay9194">Chinmay Chaudhari</a>
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

export default About;

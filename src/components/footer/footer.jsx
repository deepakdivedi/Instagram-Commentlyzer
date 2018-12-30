import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
      <div className="footer fixed-bottom">
        <footer className="text-center py-1 bg-dark">
            <span className="text-muted">Made with <a href="https://reactjs.org/">React</a> and <a href="https://getbootstrap.com/">Bootstrap</a></span>
        </footer>
      </div>
    );
  }
}

export default Footer;

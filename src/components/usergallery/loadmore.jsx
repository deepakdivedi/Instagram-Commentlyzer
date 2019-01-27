import React,{Component} from 'react';

class LoadMore extends Component {
  render(){
    if(this.props.hmp){
      return(
        <div className="mb-3">
          <button className="btn btn-primary mb-5 " onClick={this.props.request_server}>Load More</button>
      </div>);
    }else{
      return(
        <div></div>
      );
    }
  }
}

export default LoadMore;

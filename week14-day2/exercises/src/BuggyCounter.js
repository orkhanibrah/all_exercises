import React from 'react';

class BuggyCounter extends React.Component {
    constructor() {
      super();
      this.state = {counter : 0}
    }
  
    handleClick = () => {
      this.setState({counter : this.state.counter + 1})
    }
  
    render(){
        if(this.state.counter === 5){
            throw new Error('I crashed')
        }
        
      return (
        <div>
            <div onClick={this.handleClick}>{this.state.counter}</div>
        </div>
      )
    }
  }
  
  
  export default BuggyCounter;
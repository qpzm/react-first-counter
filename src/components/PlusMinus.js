import React from 'react';

class PlusMinus extends React.Component{
  increment(){
    this.props.increment();
  }

  decrement(){
    this.props.decrement();

  }

  constructor(props){
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render(){
    return(
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
export default PlusMinus;

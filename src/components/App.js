import React from 'react';
import PlusMinus from './PlusMinus';
import Display from './Display';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value : '0'
    };

    this.incrementValue = this.incrementValue.bind(this);
    this.decrementValue = this.decrementValue.bind(this);
  }

  incrementValue(){
    console.log("dd");
    this.setState((prevState) => {value: prevState.value++;});
  }

  decrementValue(){
    this.setState((prevState) => {value: prevState.value--;});
  }

  render(){
      return (
        <div>
          <Display count={this.state.value} />
          <PlusMinus increment={this.incrementValue} decrement={this.decrementValue}/>
        </div>
      );
  }
}

export default App;


import React from 'react';
import './App.css';

class App extends React.Component{
  
  render(){
    return (
      <div>
    <br/><br/><button onClick={this.props.click}>{this.props.name} !</button>
    <h2>{this.props.message}</h2>
    <div><p>button clicked {this.props.clicked} times</p></div>
    <p>Enter the temperature in celcius</p>
    <input type="text" onChange={this.props.changed} />
    <p>the temperature in fahrenheit is {this.props.myname}</p>
    </div>
    );
    //return React.createElement('div',null,React.createElement('h1',null,'hello'),React.createElement('p',null,'this is paragraph'));
  }
}
export default App;

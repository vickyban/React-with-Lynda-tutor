import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      checked: true
    }
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck(){
    this.setState({
      checked: !this.state.checked
    });
  }

  render(){
    let msg;
    if(this.state.checked) msg="checked";
    else msg="not checked"

    return (
      <div>
        <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
        <p>This checkbox is {msg}</p>
      </div>
    );
  }
}

export default App;

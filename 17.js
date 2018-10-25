
import React, { Component } from 'react';
import Display from './foo'
import './App.css';


class App extends Component {
  constructor () {
    super()
    this.state={
      jackolantern: false,
    }
  }

  setJackOLantern () {
    this.setState({
      jackolantern: true
    })

  }


  render() {
    return (
      <div className="App">
        <button onClick={this.setJackOLantern}>Click Me to Set Jack O Lantern</button>
      </div>
    );
  }
}

export default App;


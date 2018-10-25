import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    this.state = {
      item: {},
      items: []
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.items.map(i => <div>{i.name}</div>)}
      </div>
    );
  }
}

export default App;

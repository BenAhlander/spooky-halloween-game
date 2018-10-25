import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      item: {},
      items: [
        {
          name: 'ghost',
          id: 123
        },
        {
          name: 'witch',
          id: 223
        },
        {
          name: 'jack o lantern',
          id: 123
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.items.map(i => <div key={i.id}>{i.name}</div>)}
      </div>
    );
  }
}

export default App;

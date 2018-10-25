import React, { Component } from 'react';
import Foo from './foo'
import './App.css';

class App extends Component {
  state = {
    halloween: 'halloween is a cool holiday',
    ghosts: ['casper', 'boo']
  }

  handleGhostsChange = (e) => {
    let ghosts = this.state.ghosts
    ghosts.push(e.target.value)
    this.setState({ ghosts })
  }

  render() {
    return (
      <div className="App">
        <label>Ghost Change</label><input onChange={this.handleGhostsChange} />
        <h1>{this.state.halloween}</h1>
        {this.state.ghosts.map(g => <div key={g}>{g}</div>)}
      </div>
    );
  }
}

export default App;

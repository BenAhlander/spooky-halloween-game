//in ./foo.js
import * as React from 'react'
export default ({ someProp }) => <div>Halloween Rules</div>

  //in ./App.js
import React, { Component } from 'react';
import foo from './foo'

class App extends Component {
  constructor () {
    super()
    this.state = {
      item: {},
    }
  }

  render() {
    return (
      <div className="App">
        <foo />
      </div>
    );
  }
}

export default App;

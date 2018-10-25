
import React, { Component } from 'react';
import Foo from './foo'
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state={
      creatureOne: '',
      creatureTwo: '',
      creatureThree: '',
      creatureToEnter: ''
    }
  }

  handleButtonClick = () => {
    this.setState({ creatureOne: this.state.creatureToEnter })
    if(this.state.creatureOne === 'ghost') {
      this.setState({ creatureTwo: 'ghoul', creatureThree: 'poltergeist' })
    } else {
      this.setState({ creatureTwo: 'witch', creatureThree: 'mummy' })
    }

  }

  render() {
    return (
      <div className="App">
        <input placeholder="Creature to Enter" onChange={(e) => this.setState({ creatureToEnter: e.target.value })} />
        <button onClick={this.handleButtonClick}>
          Click to Set Creature
        </button>
        <ul>
          <li>{this.state.creatureOne}</li>
          <li>{this.state.creatureTwo}</li>
          <li>{this.state.creatureThree}</li>
        </ul>
      </div>
    );
  }
}

export default App;


// The dev is complaining that the ghoul and the poltergeist are never displaying. What is the root of the issue?
//  createureOne will be an object, so the equality check wont work and the else block always runs
//  Uncontrolled inputs will delay the setting of state 
//  setState is async and batched by react, so the "else" block will run every time
//  async dom events make the value of state non-reliable after the button click

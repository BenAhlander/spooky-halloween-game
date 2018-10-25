
import * as React from 'react'

const Display = (props) => {
  return (
    <div>
      <h1>{this.props.name}</h1>
      <h2>{this.props.age}</h2>
      <h3>{this.props.undead}</h3>
    </div>
  )
}

export default Display


//In App.js:
// assume code rendering this is correct
        <Display
          name="frankenstein"
          age="unknown"
          undead="sorta"
        />



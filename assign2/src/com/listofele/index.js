import React, { Component } from 'react'
import { __values } from 'tslib'

class listofele extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: props.initialCounterValue
    }
  }

  static defaultProps = {
    initialCounterValue: 0
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
          <input type = "text" name = "text" value = "" maxlength = "100" />
          <button type="submit"> click me</button>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}

export default listofele
    
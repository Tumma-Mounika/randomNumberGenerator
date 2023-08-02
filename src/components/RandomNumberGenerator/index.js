// Write your code here
import {Component} from 'react'

import './index.css'

class App extends Component {
  state = {randomValue: 0}

  getNumber = () => {
    this.setState({randomValue: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomValue} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.getNumber}>
            Generate
          </button>
          <p className="random-value">{randomValue}</p>
        </div>
      </div>
    )
  }
}

export default App

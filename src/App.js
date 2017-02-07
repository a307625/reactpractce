import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const arr = [1, 2, 3, 5, 'dasdasdas']
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {arr.map(x => {
            return (
              <div key={x.toString()}>
                <input type='text' defaultValue={x} />
                <br />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Roller from './Components/Roller'

class App extends Component {
  render() {
    return (
      <div className="core">
        <header className="App-header">
          <h1 className="App-name">
            Overwicker
          </h1>
          <Roller />
        </header>
      </div>
    );
  }
}

export default App;

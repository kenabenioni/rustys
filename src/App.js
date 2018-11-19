import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
      <div>
        Slides and Rating
      </div>
      <div>
        Distribute
      </div>
      </div>
    );
  }
}

export default App;

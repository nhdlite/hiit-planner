import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WorkoutContainer from './WorkoutContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WorkoutContainer></WorkoutContainer>
      </div>
    );
  }
}

export default App;

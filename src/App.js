import React, { Component } from 'react';
import './App.css';
import {AboutMe} from './components/aboutMe'
import { Resume } from './components/resume'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Rubber Kalimba</h1>
          <p> The home of Nicholas Stephenson</p>
        </header>
        <h1 class="home-card">About Me</h1>
        <h1 class="home-card">Projects</h1>
        <h1 class="home-card">Resume</h1>
        <h1 class="home-card">Contact</h1>
        <Resume/>
      </div>
    );
  }
}

export default App;

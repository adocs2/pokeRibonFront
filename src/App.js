import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/layout/NavBar'
import DashBoard from './components/layout/DashBoard'
import background from './vector-pokemon-badges-patterns.jpg'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ background: `url(${background})`}}>
      <NavBar></NavBar>
      <div className="container">
        <DashBoard></DashBoard>
      </div>
      </div>
    );
  }
}

export default App;

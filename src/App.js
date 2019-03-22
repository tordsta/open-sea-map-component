import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OpenSeaMap from './components/OpenSeaMap/OpenSeaMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OpenSeaMap/>
      </div>
    );
  }
}

export default App;

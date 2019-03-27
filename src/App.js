import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OpenSeaMap from './components/OpenSeaMap/OpenSeaMap';
import GoogleMaps from './components/GoogleMaps/GoogleMaps';

class App extends Component {



  render() {
    return (
      <div className="App">
        <GoogleMaps
            mapHeight={600}
            mapWidth={600}
        />
      </div>
    );
  }
}

export default App;

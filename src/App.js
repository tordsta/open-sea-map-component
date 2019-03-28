import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OpenSeaMap from './components/OpenSeaMap/OpenSeaMap';
import GoogleMapsSelectiveMarker from './components/google-maps/GoogleMapsSelectiveMarker';

class App extends Component {


  render() {
    return (
      <div className="App">
        <GoogleMapsSelectiveMarker
        />
      </div>
    );
  }
}

export default App;

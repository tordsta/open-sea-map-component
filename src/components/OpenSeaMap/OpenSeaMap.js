import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'react-bootstrap';

// Import Components

// Import Actions

// Import Selectors

class OpenSeaMap extends Component {
    render() {
        return (
            <div>
                <iframe
                    width="425"
                    height="350"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="http://www.openseamap.org/export/embed.html?bbox=-2.01,43.15,13.85,53.35&layer=mapnik"
                    //style={{border: 1px solid black}}
                    />
                <a href="http://www.openseamap.org/?lat=48.25&lon=5.92&zoom=5&layers=BFTTFFTFFTF0FF">
                    Größere Karte anzeigen
                </a>
            </div>
        );
    }
}


export default OpenSeaMap;

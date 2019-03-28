import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GoogleMapsCore from './GoogleMapsCore';

// Import Components

// Import Actions

// Import Selectors

//

class GoogleMapsSelectiveMarker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMarker: false,
            selectedLatitude: 40.756795,
            selectedLongitude: -73.954298,
        };
        this.selectPosition = this.selectPosition.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    selectPosition(event) {
        this.setState({
            showMarker: true,
            selectedLatitude: event.latLng.lat(),
            selectedLongitude: event.latLng.lng()
        })
    }

    handleClick = (event) => { this.selectPosition(event)};

    render(){
        return(
            <GoogleMapsCore
                mapWidth = {this.props.mapWidth}
                mapHeight = {this.props.mapHeight}
                displayLatitude={this.props.displayLatitude}
                displayLongitude={this.props.displayLongitude}
                mapZoom={this.props.mapZoom}
                googleMapAPIkey={this.props.googleMapAPIkey}


                showMarker = {this.state.showMarker}
                selectedLatitude = {this.state.selectedLatitude}
                selectedLongitude = {this.state.selectedLongitude}
                handleClick = {this.handleClick}
            />
        )
    }
}

//TODO implement default props and proptypes, assume override from called component

GoogleMapsSelectiveMarker.propTypes = {
    displayLatitude: PropTypes.number,
    displayLongitude: PropTypes.number,
    mapWidth: PropTypes.number,
    mapHeight: PropTypes.number,
    mapZoom: PropTypes.number,
    googleMapAPIkey: PropTypes.string
};

GoogleMapsSelectiveMarker.defaultProps = {
    displayLatitude: 40.756795,
    displayLongitude: -73.954298,
    mapWidth: 800,
    mapHeight: 800,
    mapZoom: 13,
    googleMapAPIkey: "AIzaSyAiufyGAqyyGilVDKJlJI1syVQSbYkqGFY"
};


export default GoogleMapsSelectiveMarker;

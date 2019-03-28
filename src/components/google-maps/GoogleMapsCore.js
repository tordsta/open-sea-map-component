import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";

// Import Components

// Import Actions

// Import Selectors

class GoogleMapsCore extends Component {

    //TODO implement map load only one time, with cache, implement component lifecycle?

    render() {
        const GoogleMapWrapper = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultCenter = { { lat: this.props.displayLatitude, lng: this.props.displayLongitude } }
                defaultZoom = { this.props.mapZoom }
                onClick={(e) => this.props.handleClick(e)}>
                {this.props.showMarker &&
                <Marker
                    position={{lat: this.props.selectedLatitude, lng: this.props.selectedLongitude}}
                    onClick={() => console.log("marker")}/>}
            </GoogleMap>
        ));

        return (
            <div>
                <GoogleMapWrapper
                    containerElement = { <div style={{ height: this.props.mapHeight, width: this.props.mapWidth }} /> }
                    mapElement = { <div style={{ height: `100%` }} /> }
                    googleMapURL = {"https://maps.googleapis.com/maps/api/js?key=" + this.props.googleMapAPIkey}
                    loadingElement = {<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}


GoogleMapsCore.propTypes = {
    displayLatitude: PropTypes.number,
    displayLongitude: PropTypes.number,
    mapWidth: PropTypes.number,
    mapHeight: PropTypes.number,
    mapZoom: PropTypes.number,
    googleMapAPIkey: PropTypes.string
};

//TODO make default prop to handle click
GoogleMapsCore.defaultProps = {
    displayLatitude: 40.756795,
    displayLongitude: -73.954298,
    mapWidth: 400,
    mapHeight: 400,
    mapZoom: 13,
    googleMapAPIkey: "AIzaSyAiufyGAqyyGilVDKJlJI1syVQSbYkqGFY"
};

export default GoogleMapsCore;

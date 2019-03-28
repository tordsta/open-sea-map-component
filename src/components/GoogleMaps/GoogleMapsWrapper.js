import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";

// Import Components

// Import Actions

// Import Selectors

class GoogleMapsWrapper extends Component {

    handleClick = (event) => {
        console.log("coordinates", event.latLng.lat(), event.latLng.lng());
        this.props.selectPos(event.latLng.lat(), event.latLng.lng());
    };

    render() {
        const GoogleMapWrapper = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultCenter = { { lat: this.props.displayLatitude, lng: this.props.displayLongitude } }
                defaultZoom = { this.props.mapZoom }
                onClick={(e) => this.handleClick(e)}
            >
                {
                    this.props.showMarker &&
                    <Marker
                        position={{lat: this.props.selectedLatitude, lng: this.props.selectedLongitude}}
                        onClick={() => console.log("marker")}
                    />
                }
                <Marker

                />
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


GoogleMapsWrapper.propTypes = {
    displayLatitude: PropTypes.number,
    displayLongitude: PropTypes.number,
    mapWidth: PropTypes.number,
    mapHeight: PropTypes.number,
    mapZoom: PropTypes.number,
    googleMapAPIkey: PropTypes.string
};

GoogleMapsWrapper.defaultProps = {
    displayLatitude: 40.756795,
    displayLongitude: -73.954298,
    mapWidth: 400,
    mapHeight: 400,
    mapZoom: 13,
    googleMapAPIkey: "AIzaSyAiufyGAqyyGilVDKJlJI1syVQSbYkqGFY"
};

export default GoogleMapsWrapper;

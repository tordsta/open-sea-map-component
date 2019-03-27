import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

// Import Components

// Import Actions

// Import Selectors

//

//TODO: load this script in before the components load, https://www.fullstackreact.com/articles/Declaratively_loading_JS_libraries/index.html
//https://maps.googleapis.com/maps/api/js?key=AIzaSyAiufyGAqyyGilVDKJlJI1syVQSbYkqGFY

class GoogleMaps extends Component {
    constructor(props){
        super(props);
        this.state = {
            showMarker: true
        }
    }




    render() {
        const GoogleMapWrapper = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultCenter = { { lat: this.props.displayLatitude, lng: this.props.displayLongitude } }
                defaultZoom = { this.props.mapZoom }>
                {
                    this.state.showMarker &&
                    <Marker position={{lat: this.props.selectedLatitude, lng: this.props.selectedLongitude}}/>
                }
            </GoogleMap>
        ));


        return (
            <div>
                <GoogleMapWrapper
                    containerElement = { <div style={{ height: this.props.mapHeight, width: this.props.mapWidth }} /> }
                    mapElement = { <div style={{ height: `100%` }} /> }
                    googleMapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAiufyGAqyyGilVDKJlJI1syVQSbYkqGFY"
                    loadingElement = {<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

GoogleMaps.propTypes = {
    displayLatitude: PropTypes.number,
    displayLongitude: PropTypes.number,
    selectedLatitude: PropTypes.number,
    selectedLongitude: PropTypes.number,
    mapWidth: PropTypes.number,
    mapHeight: PropTypes.number,
    mapZoom: PropTypes.number,
    googleMapAPIkey: PropTypes.string
};

GoogleMaps.defaultProps = {
    displayLatitude: 40.756795,
    displayLongitude: -73.954298,
    selectedLatitude: 40.756795,
    selectedLongitude: -73.954298,
    mapWidth: 400,
    mapHeight: 400,
    mapZoom: 13,
    googleMapAPIkey: "AIzaSyAiufyGAqyyGilVDKJlJI1syVQSbYkqGFY"
};


export default GoogleMaps;

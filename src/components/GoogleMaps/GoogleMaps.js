import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GoogleMapsWrapper from './GoogleMapsWrapper';

// Import Components

// Import Actions

// Import Selectors

//

class GoogleMaps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMarker: true,
            selectedLatitude: 40.756795,
            selectedLongitude: -73.954298,
        };
        this.selectPosition = this.selectPosition.bind(this);
    }

    selectPosition(lat, lng) {
        this.setState({
            selectedLatitude: lat,
            selectedLongitude: lng
        })
    }

    render(){
        return(
            <GoogleMapsWrapper
                showMarker = {this.state.showMarker}
                selectedLatitude = {this.state.selectedLatitude}
                selectedLongitude = {this.state.selectedLongitude}
                mapWidth = {this.props.mapWidth}
                mapHeight = {this.props.mapHeight}
                selectPos = {this.selectPosition}
            />
        )
    }
}

//TODO implement default props and proptypes, assume override from called component



export default GoogleMaps;

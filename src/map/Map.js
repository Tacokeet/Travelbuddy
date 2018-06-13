import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import marker from '../images/purple.png';
/*global google*/

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,
} from 'react-google-maps';

import  {
    compose,
    withProps,
    lifecycle
} from 'recompose';

const AnyReactComponent = ({ pin }) => <img src={marker} alt={"marker"} />;

const MapWithADirectionsRenderer = compose (
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDA8JeZ3hy9n1XHBBuq6ke8M9BfiACME_E&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `300px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentDidMount() {
            let latDes = this.props.latDes;
            let lngDes = this.props.lngDes;
            const DirectionsService = new google.maps.DirectionsService();
            DirectionsService.route({
                origin: new google.maps.LatLng(this.props.latCurr, this.props.lngCurr),
                destination: new google.maps.LatLng(this.props.latDes, this.props.lngDes),
                travelMode: google.maps.TravelMode.DRIVING,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result,
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });
        }
    })
)(props =>
    <GoogleMap
        defaultZoom={7}
    >
        {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
);

class Map extends Component {
    constructor(props) {
        super(props);
    } 

    render() {
        console.log("current lat" + this.props.currLat)
        console.log("current lat" + this.props.currLng)
        return (
            <div>

                {<MapWithADirectionsRenderer latDes={this.props.lat}
                                             lngDes={this.props.lng}
                                             latCurr={this.props.currLat}
                                             lngCurr={this.props.currLng}
                />}
            </div>

        );
    }
}

export default Map;
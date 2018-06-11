import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import marker from '../images/purple.png';

const AnyReactComponent = ({ pin }) => <img src={marker} alt={"marker"} />;

class Map extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            // Important! Always set the container height explicitly
                <div  style={{ height: '300px', width: '300px', margin: '0 auto'}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyAjm2v6jfYxeNsvyJQs56nd7pUvALXqpP8' }}
                        center={{lat: this.props.lat, lng: this.props.lng}}
                        defaultZoom={12}
                    >
                        <AnyReactComponent
                            lat={this.props.lat}
                            lng={this.props.lng}
                            pin={marker}
                        />
                    </GoogleMapReact>
                </div>
        );
    }
}

export default Map;
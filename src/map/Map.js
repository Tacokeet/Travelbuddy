import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class map extends Component {
    static defaultProps = {
        center: {
            lat: 53.24,
            lng: 6.53
        },
        zoom: 12
    };

    render() {
        return (
            // Important! Always set the container height explicitly
                <div  style={{ height: '45vh', width: '25vw', marginLeft: '50vw', marginTop: '15vh'}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyAjm2v6jfYxeNsvyJQs56nd7pUvALXqpP8' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text={'Kreyser Avrora'}
                        />
                    </GoogleMapReact>
                </div>
        );
    }
}

export default map;
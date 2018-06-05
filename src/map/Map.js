import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;


class map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: {},
            latitude : null,
            center: {
                lat: 20.24,
                lng: 20.53
            },
            zoom: 8,

        }
        this.setState({
            latitude: this.props.latitude
    })

    }

    componentDidMount(){
        console.log('Some Latitude from app.js ' + this.props.latitude)
        console.log('Some Latitude from app.js ' + this.state.latitude)
    }

    render() {
        return (
            // Important! Always set the container height explicitly
                <div  style={{ height: '300px', width: '300px', margin: '0 auto'}}>
                    <h3>TEST</h3>
                    <h3>{this.state.latitude}</h3>
                    <h3>{this.props.latitude}</h3>
                    <h3>{this.props.longitude}</h3>
                    <h3>{this.props.zoom}</h3>
                    <p>Some text that is located in the MAP js and need to be in the modal right</p>

                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyAjm2v6jfYxeNsvyJQs56nd7pUvALXqpP8' }}
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text={'Error Text'}
                        />
                    </GoogleMapReact>
                    {this.componentDidMount()}
                </div>
        );
    }
}



export default map;
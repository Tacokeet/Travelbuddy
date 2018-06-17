import React, {Component} from 'react';
import './Modal.css';
import Map from '../map/Map';

class Modal extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        //Hier is de place ID
        console.log(this.props.id);

        let open = "Closed"
        if (this.props.open) {
            open = "Open now"
        }

        return(

            <div id="myModal" className="modal">
                {console.log("Modal image: " + this.props.image)}
                {console.log("Modal address: " + this.props.address)}
                <div className="modal-content">
                    <span id={'close'} onClick={this.props.click} className="close">&times;</span>
                    <div className={'left'}>
                        <img className={'modalImage'} src={this.props.image} onClick={this.props.click} alt="gfd" />
                        <div className={'textLocation'}>
                            <p id={'nameLocation'}>{this.props.name}</p>
                            <p>{this.props.address}</p>
                            <p>{open}</p>
                        </div>


                    </div>
                    <div id={'right'}>
                        <Map
                            lat = {this.props.lat}
                            lng = {this.props.lng}
                            currLat = {this.props.currentLat}
                            currLng = {this.props.currentLng}
                        />
                    </div>


                </div>

            </div>
        )
    }


}

export default Modal;

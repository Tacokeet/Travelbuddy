import React, {Component} from 'react';
import './Modal.css';
import Map from '../map/Map';

let rand = Math.floor(Math.random() * 4);

class Modal extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let open = "Closed"
        if (this.props.open) {
            open = "Open now"
        }

        return(

            <div id="myModal" className="modal">

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
                        lng = {this.props.lng} />
                    </div>


                </div>

            </div>
        )
    }


}

export default Modal;

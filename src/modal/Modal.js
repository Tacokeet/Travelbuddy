import React from 'react';
import './Modal.css';
import Map from '../map/Map';

let rand = Math.floor(Math.random() * 4);

const modal = (props) => {
    return(


        <div id="myModal" className="modal">

            <div className="modal-content">
                <span id={'close'} onClick={props.click} className="close">&times;</span>
                <div className={'left'}>
                    <img className={'modalImage'} src={props.photo[rand]} onClick={props.click} alt="gfd" />
                    <div className={'textLocation'}>
                        <p id={'nameLocation'}>Amazing place</p>
                        <p>adres: Bornholmstraat 42</p>
                        <p>tel: 050 541 4477</p>
                        <p>Latitude {props.latitude}</p>
                        <p>Longitude {props.longitude}</p>
                    </div>


                </div>
                <div id={'right'}>
                    <Map
                    />
                </div>


            </div>

        </div>
        )

}

export default modal;
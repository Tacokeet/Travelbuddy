import React from 'react';
import './Modal.css';

const modal = (props) => {
    return(


        <div id="myModal" className="modal">

            <div className="modal-content">
                <span id={'close'} onClick={props.click} className="close">&times;</span>
                <p>Some text in the Modal..</p>
            </div>

        </div>
        )

}

export default modal;
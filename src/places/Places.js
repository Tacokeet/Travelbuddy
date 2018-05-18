import React from 'react';
import './Places.css';
import logo from "../images/6.JPG"

const places = (props) => {
    return <div>
        <h3 className={'placesText'}>{props.categories}</h3>
        <div className={'places'}>
            <img src={logo} alt="favicon"/>
        </div>

    </div>

}

export default places;

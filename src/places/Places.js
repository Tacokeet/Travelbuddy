import React from 'react';
import './Places.css';

const places = (props) => {
    return (
    <div>
        <h3 className={'placesText'} >{props.categories}</h3>
        <div className={'places'}></div>

    </div>
    )

}

export default places;
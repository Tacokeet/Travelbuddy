import React from 'react';
import './City.css';

const city = (props) => {
    return (
        <div className={'city'}>
            <h2>{props.region_name}</h2>
            <p>{props.groningen}</p>
        </div>
    )

}

export default city;
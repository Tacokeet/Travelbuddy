import React, { Component } from 'react';
import './City.css';

const city = (props) => {
    return (
        <div className={'city'}>
            <h2>{props.cityName}</h2>
            <p id={'#cityText'}>
                Groningen is the main municipality as well as the capital city of the eponymous province in the Netherlands.
                With a population of 202,567 as of 2017,[6] it is the largest city in the north of the Netherlands. An old city,
                Groningen was the regional power of the northern Netherlands,
                a semi-independent city-state and member of the German Hanseatic League.
                Groningen is a university city: it houses the University of Groningen (with about 30,000 students)
                and the Hanze University of Applied Sciences (with about 25,000 students).
            </p>
        </div>
    )

}

export default city;
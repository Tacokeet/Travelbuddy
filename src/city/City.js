import React from 'react';
import './City.css';

const city = (props) => {
    return (
        <div className={'city' }>
            <img src={props.country_flag} alt="country_flag" width={80} height={60} />
            <h2>{props.city}</h2>
            <p>{props.wikitext}</p>
            <ul id={'extraInfo'}>
                <li>Language: {props.name}</li>
                <li>Continent: {props.continent_name}</li>
                <li>Calling code: +{props.calling_code}</li>
                <li>Region: {props.region_name}</li>
                <li>Country: {props.country_name}</li>
            </ul>

        </div>
    )

}

export default city;
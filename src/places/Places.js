import React from 'react';
import './Places.css';
import logo1 from '../images/1.jpg';
import logo2 from '../images/2.jpg';
import logo3 from '../images/3.jpg';
import logo4 from '../images/4.jpg';



const places = (props) => {

    return (
    <div>
        <h3 className={'placesText'} >{props.categories}</h3>
        <div className={'places'}>
            <img className={'locations'} src={logo1} onClick={props.click} alt="gfd" />
            <img className={'locations'} src={logo2} onClick={props.click} alt="ghfd" />
            <img className={'locations'} src={logo3} onClick={props.click} alt="ff" />
            <img className={'locations'} src={logo4} onClick={props.click} alt="ss" />

        </div>

    </div>
    )

}

export default places;
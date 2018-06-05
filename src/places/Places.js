import React, { Component } from 'react';
import './Places.css';
import places from '../images/placeholder.png';

class Places extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        }

    }

    baseUrl = "https://maps.googleapis.com/maps/api/place/photo?maxheight=234&maxwidth=280&photoreference=";
    apikey = "&key=AIzaSyDA8JeZ3hy9n1XHBBuq6ke8M9BfiACME_E";
    radius = '&radius=';
    type = '&type=';

    componentDidMount = () => {
        console.log("Get Results");
        let proxy = "https://cors-anywhere.herokuapp.com/";
        let cat = this.props.categories;
        let url = this.props.query + this.radius + this.props.range + this.type + cat + this.apikey;
        fetch(proxy + url)
            .then(response => response.json())
            .then(resultPlaces => {
                console.log(123);
                this.setState({
                    results: resultPlaces.results
                })
            })
    }

    createContent = () => {
        console.log("Create content");
        let content = [];
        let image;
        for (let index = 0; index < 4; index++) {
            if (this.state.results[index].photos == undefined) {
                image = places;
            } else {
                image = this.baseUrl + this.state.results[index].photos[0].photo_reference + this.apikey;
            }
            content.push(<div className={"singleResult"}>
                <div className={"nameBox"}>
                    <p>{this.state.results[index].name}</p>
                </div>
                <div className={"rating"}>{this.state.results[index].rating}</div>
                <img src={image} alt={""}/>
            </div>)
        }

        return content
    }

    render() {
        return (
            this.state.results.length > 1 &&
            <div className={'placesRow'}>
                <h3 className={'placesText'} >{this.props.categories.split('_').join(' ')}</h3>
                {this.createContent()}
            </div>
        )
    }

}


export default Places;
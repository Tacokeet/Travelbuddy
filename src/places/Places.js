import React, { Component } from 'react';
import './Places.css';

class Places extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
        }

    }

    baseUrl = "https://maps.googleapis.com/maps/api/place/photo?maxheight=234&maxwidth=280&photoreference=";
    apikey = "&key=AIzaSyDA8JeZ3hy9n1XHBBuq6ke8M9BfiACME_E";

    componentDidMount() {
        let proxy = "https://cors-anywhere.herokuapp.com/";
        let type = this.props.categories;
        let url = this.props.query + type + this.apikey;
        fetch(proxy + url)
            .then(response => response.json())
            .then(resultPlaces => {
                console.log(url);
                this.setState({
                    results: resultPlaces.results
                })
            })
    }

    render() {
        return (
            this.state.results.length > 1 &&
            <div className={'placesRow'}>
                <h3 className={'placesText'} >{this.props.categories}</h3>
                    <div className={"singleResult"}>
                        <div className={"nameBox"}>
                            <p>{this.state.results[0].name}</p>
                        </div>
                        <div className={"rating"}>{this.state.results[0].rating}</div>
                            <img src={this.baseUrl + this.state.results[0].photos[0].photo_reference + this.apikey} alt={""}/>
                    </div>
                    <div className={"singleResult"}>
                        <div className={"nameBox"}>
                            <p>{this.state.results[1].name}</p>
                        </div>
                        <div className={"rating"}>{this.state.results[1].rating}</div>
                        <img src={this.baseUrl + this.state.results[1].photos[0].photo_reference + this.apikey} alt={""}/>
                    </div>
                    <div className={"singleResult"}>
                        <div className={"nameBox"}>
                            <p>{this.state.results[2].name}</p>
                        </div>
                        <div className={"rating"}>{this.state.results[2].rating}</div>
                        <img src={this.baseUrl + this.state.results[2].photos[0].photo_reference + this.apikey} alt={""}/>
                    </div>
                    <div className={"singleResult"}>
                        <div className={"nameBox"}>
                            <p>{this.state.results[3].name}</p>
                        </div>
                        <div className={"rating"}>{this.state.results[3].rating}</div>
                        <img src={this.baseUrl + this.state.results[3].photos[0].photo_reference + this.apikey} alt={""}/>
                    </div>
            </div>
        )
    }

}

class ResultList extends Component {

}

export default Places;
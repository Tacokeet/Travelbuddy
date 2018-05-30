import React, {Component} from "react";
import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            input: '',
            type: [],
            radius: "",
            language: "",
            minPrice: "",
            maxPrice: "",
            openNow: "",
            rankBy: ""
        };
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        })
    }

    searchByPlace = (e) => {
        let keyword = this.state.input.split(' ').join('+');
        let proxy = "https://cors-anywhere.herokuapp.com/";
        let url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + keyword +
            "&key=AIzaSyDA8JeZ3hy9n1XHBBuq6ke8M9BfiACME_E";
        fetch(proxy + url)
            .then(response => response.json())
            .then(result => {
                this.setState({ results: result.results });
                console.log(result.results);
            });
    }

    render() {
        return (
            <div className={"data"}>
                <h3>Zoek door TravelBuddy</h3>
                <input type={"text"} name={"place"} onChange={this.handleChange} />
                <button type={"submit"} name={"submit"} onClick={this.searchByPlace}>Zoek</button>
                <ResultList results={this.state.results} results={this.state.results}/>
            </div>
        )
    }
}

class ResultList extends Component {

    render() {
        return (
            <div id={"result"}>
                {this.props.results.map((result) => (
                    <Result key={result.id} result={result} />
                ))}
            </div>
        )
    }

}

class Result extends Component {
    constructor(props) {
        super(props);
    }

    baseUrl = "https://maps.googleapis.com/maps/api/place/photo?maxheight=234&maxwidth=280&photoreference=";
    apikey = "&key=AIzaSyDA8JeZ3hy9n1XHBBuq6ke8M9BfiACME_E";

    render() {
        return (
            this.props.result.photos != null  &&
            <div className={"singleResult"}>
                <div className={"nameBox"}>
                    <p>{this.props.result.name}</p>
                </div>
                <div className={"rating"}>{this.props.result.rating}</div>
                {this.props.result.photos.map((element) => (
                    <img src={this.baseUrl + element.photo_reference + this.apikey} key={element} alt={""}/>
                ))}
            </div>
        );
    }
}


export default Search;
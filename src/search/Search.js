import React, {Component} from "react";
import './Search.css';
import banner from '../images/searchBanner.png';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import xIcon from "@fortawesome/fontawesome-free-solid/faTimes";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            input: '',
            type: "",
            radius: "",
            language: "",
            minPrice: "",
            maxPrice: "",
            openNow: false,
            rankBy: "",
            locationLng: "",
            locationLat: ""
        };
    }

    apikey = "&key=AIzaSyDA8JeZ3hy9n1XHBBuq6ke8M9BfiACME_E";

    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        })
    }

    searchByPlace = (e) => {
        let keyword = this.state.input.split(' ').join('+');
        let proxy = "https://cors-anywhere.herokuapp.com/";
        let location = "https://maps.googleapis.com/maps/api/geocode/json?address=" + keyword + this.apikey;
        let distance = "&radius=" + this.state.radius;
        let open = "&opennow=" + this.state.openNow;
        let type = "&type=" + this.state.type;
        let rankBy = "&rankby=" + this.state.rankBy;
        fetch(location)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    locationLng: result.results[0].geometry.location.lng,
                    locationLat: result.results[0].geometry.location.lat
                })
                let specLocation = this.state.locationLat + "," + this.state.locationLng
                let url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + specLocation
                    + distance + type + open + "&key=AIzaSyDA8JeZ3hy9n1XHBBuq6ke8M9BfiACME_E";
                fetch(proxy + url)
                    .then(response => response.json())
                    .then(result => {
                        console.log(url)
                        this.setState({ results: result.results });
                console.log(result.results);
                });
            });


    }

    changeType = (e) => {
        console.log(e.target.value)
        this.setState({
            type: e.target.value
        })
    }

    changeOpen = (e) => {
        if (this.state.openNow == false) {
            this.setState({
                openNow: true,
                open: "Open now"
            })
        } else {
            this.setState({
                openNow: false,
                open: ""
            })
        }
    }

    changeRadius = (e) => {
        console.log(e.target.value)
        this.setState({
            radius: e.target.value
        })
    }

    changeRankBy = (e) => {
        console.log(e.target.value)
        this.setState({
            rankBy: e.target.value
        })
    }

    render() {
        return (
                <div className={"data"}>
                    <div className={"searchHeader"}>
                        <div className={"col-12 search"}>
                        <h3>Zoek door TravelBuddy</h3>
                        <input type={"text"} name={"place"} onChange={this.handleChange} />
                        <button type={"submit"} name={"submit"} onClick={this.searchByPlace}>Zoek</button>
                    </div>
                    </div>
                    <div className={"col-12"}>
                        <div className={"searchContainer"}>
                            <div className={"filter"}>
                                <div className={"selection"}>
                                    <div>
                                        <p>Your selection</p>
                                        <ul className={"yourSelection"}>
                                            {this.state.type != "" &&
                                                <li><label className={"preference"}>{this.state.type.split('_').join(' ')}</label></li>}
                                            {this.state.openNow != false &&
                                                <li><label className={"preference"}>{this.state.open}</label></li>}
                                            {this.state.radius != "" &&
                                                <li><label className={"preference"}>
                                                {this.state.radius.substring(0, this.state.radius.length - 3)} km</label></li>}
                                            {this.state.rankBy != "" && <li><label className={"preference"}>{this.state.rankBy}</label></li>}
                                        </ul>
                                    </div>
                                    <div>
                                        <p>Type of result</p>
                                        <ul>
                                            <li>
                                                <input type="radio" name={"type"} value={"restaurant"} onClick={this.changeType} />
                                                <span>Restaurant</span>
                                            </li>
                                            <li>
                                                <input type="radio" name={"type"} value={"bar"} onClick={this.changeType}/>
                                                <span>Music store</span>
                                            </li>
                                            <li>
                                                <input type="radio" name={"type"} value={"museum"} onClick={this.changeType} />
                                                <span>Museum</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p>Opened</p>
                                        <ul>
                                            <li>
                                                <input type="checkbox" onClick={this.changeOpen} checked={this.state.openNow} />
                                                <span>Is open</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p>Max. distance</p>
                                        <ul>
                                            <li>
                                                <input type="radio" name="range"  value="5000" onChange={this.changeRadius} />
                                                <span>5 km</span>
                                            </li>
                                            <li>
                                                <input type="radio" name="range"  value="10000" onChange={this.changeRadius} />
                                                <span>10 km</span>
                                            </li>
                                            <li>
                                                <input type="radio" name="range"  value="15000" onChange={this.changeRadius} />
                                                <span>15 km</span>
                                            </li>
                                            <li>
                                                <input type="radio" name="range"  value="20000" onChange={this.changeRadius} />
                                                <span>20 km</span>
                                            </li>
                                            <li>
                                                <input type="radio" name="range"  value="25000" onChange={this.changeRadius} />
                                                <span>25 km</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={"allResults"}>
                                <ResultList results={this.state.results} results={this.state.results}/>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

class ResultList extends Component {

    render() {
        return (
            <div id={"resultSearch"}>
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
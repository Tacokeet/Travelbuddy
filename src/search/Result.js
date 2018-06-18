import React, { Component}  from 'react';

class Result extends Component {
    constructor(props) {
        super(props);
    }

    baseUrl = "https://maps.googleapis.com/maps/api/place/photo?maxheight=234&maxwidth=280&photoreference=";
    apikey = "&key=AIzaSyDA8JeZ3hy9n1XHBBuq6ke8M9BfiACME_E";

    render() {
        return (
            this.props.result.photos != null  &&
            <div className={"singleResult"} onClick={() => this.props.handlerss(
                this.props.result.name,
                this.baseUrl + this.props.result.photos[0].photo_reference + this.apikey,
                this.props.result.vicinity,
                this.props.result.opening_hours.open_now,
                this.props.result.geometry.location.lat,
                this.props.result.geometry.location.lng,
                this.props.result.place_id,
            )}>
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

export default Result;
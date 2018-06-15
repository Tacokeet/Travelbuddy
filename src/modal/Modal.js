import React, {Component} from 'react';
import './Modal.css';
import Map from '../map/Map';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import heartIcon from '@fortawesome/fontawesome-free-solid/faHeart';
import thumbsIcon from '@fortawesome/fontawesome-free-solid/faThumbsUp';
import axios from 'axios';

let rand = Math.floor(Math.random() * 4);

class Modal extends Component {

    constructor(props) {
        super(props);
		
		this.state = {
			voteCount: 0,
			voted: true,
			favorite: "Add Favorite",
			url: "/api/likes",
			placeId: "?placeId=" + this.props.id,
			userId: "",
			checkUrl: "/api/user/checkLiked",
			loggedIn: false
		}
		
		this.checkLogin()
		
		this.vote = this.vote.bind(this)
		this.getLikes()
    }

    render() {
        let open = "Closed"
        if (this.props.open) {
            open = "Open now"
        }
		
        return(

            <div id="myModal" className="modal">

                <div className="modal-content">
                    <span id={'close'} onClick={this.props.click} className="close">&times;</span>
                    <div className={'left'}>
                        <img className={'modalImage'} src={this.props.image} onClick={this.props.click} alt="gfd" />
                        <div className={'textLocation'}>
                            <p id={'nameLocation'}>{this.props.name}</p>
                            <p>{this.props.address}</p>
                            <p>{open}</p>
							<div className="statsLocation">
								<div className="voteLocation">
									<FontAwesomeIcon icon={thumbsIcon} onClick={this.vote} id="voteIcon" /> {this.state.voteCount}
								</div>
								<div className="favLocation">
									<FontAwesomeIcon icon={heartIcon} id="heartIcon" /> {this.state.favorite}
								</div>
							</div>
                        </div>


                    </div>
                    <div id={'right'}>
                        <Map
                            lat = {this.props.lat}
                            lng = {this.props.lng}
                            currLat = {this.props.currentLat}
                            currLng = {this.props.currentLng}
                        />
                    </div>


                </div>

            </div>
        )
    }
	
	vote(event) {
		if(this.state.loggedIn) {
			if(this.state.voted) {
				axios.delete(this.state.url + this.state.placeId + this.state.userId)
				.then(response => {
					if(response.data['likes'] == "Error") {
						console.log("Error")
					} else {
						this.setState({
							voteCount: response.data['likes']
						})
						document.getElementById("voteIcon").style.color = "white";
					}		
				});  
			} 
			else {
				axios.post(this.state.url + this.state.placeId + this.state.userId)
				.then(response => {
					if(response.data['likes'] == "Error") {
						console.log("Error");
					} else {
						this.setState({
							voteCount: response.data['likes']
						});
						document.getElementById("voteIcon").style.color = "green";
					}		
				});  
			}
			this.setState({
				voted: !this.state.voted
			});
		}
	}
	
	getLikes() {
		axios.get(this.state.url + this.state.placeId)
			.then(response => {
				this.setState({
					voteCount: response.data['likes']
				});			
			});
			
		axios.get(this.state.checkUrl + this.state.placeId + this.state.userId)
			.then(response => {
				if(response.data == "Error") {
					console.log("Error");
				} 
				else if(response.data == "True") {
					document.getElementById("voteIcon").style.color = "green";
				}
				else {
					document.getElementById("voteIcon").style.color = "#fff";
				}
			});
	}
	
	checkLogin() {
		const checkUrl = "/api/loginCheck";
		axios.get(checkUrl)
			.then(response => {
				if(response.data['username']) {
					this.setState({
						loggedIn: true,
						userId: "&userId=" + response.data['username']
					});
					this.getLikes();
				}
			});
	}
}

export default Modal;

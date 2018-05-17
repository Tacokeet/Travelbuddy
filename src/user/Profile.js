import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			username: "johnsmith43"
		}
	}
	render() {
		return(
			<main>
				<div id="profile">
					<h1>{this.state.username}</h1>
				</div>
			</main>
		);
	}
}

export default Profile;
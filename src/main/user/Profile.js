import React, { Component } from 'react';

class Profile extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			username: "John Smith"
		}
	}
	render() {
		return(
			<main>
				<h1>{this.state.username}</h1>
			</main>
		);
	}
}

export default Profile;
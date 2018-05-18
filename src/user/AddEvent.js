import React, { Component } from 'react';
import './AddEvent.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import fileIcon from '@fortawesome/fontawesome-free-regular/faFile';

class AddEvent extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			name: "Kingsland",
			category: "Festival",
			description: "Every year, a huge festival takes place in Groningen: Kingsland",
			location: "Stadspark, Groningen"
		}
	}
	
	render() {
		return (
			<main>
				<h1>Add event</h1>
				
				<div id="addEventWrapper">
					<form>
						<div className="addEventRow">
							<div className="addEventItem">
								<label className="addEventLabel">Event name</label>
								<input type="text"/>
							</div>

							<div className="addEventItem">
								<label className="addEventLabel">Category</label>
								<select name="category">
									<option value="food">Food</option>
									<option value="garageSale">Garage Sale</option>
									<option value="festival">Festival</option>
								</select>
							</div>
						</div>
						
						<div className="addEventRow">
							<div className="addEventItem">
								<label className="addEventLabel">Short event description</label>
								<textarea name="description"/>
							</div>
							<div className="addEventItem">
								<label className="addEventLabel">Location</label>
								<input type="text" />
							</div>
						</div>

						<div className="addEventRow">
							<div className="addEventItem">
								<label className="addEventLabel">Start date</label>
								<input type="date" />
							</div>
							
							<div className="addEventItem">
								<label className="addEventLabel">End date</label>
								<input type="date" />
							</div>
						</div>
						
						<div className="addEventRow">
							<label className="addEventLabel" id="addImageLabel">Add an image if you want:</label>
							<label for="fileUpload" id="addImageBtn"><FontAwesomeIcon icon={fileIcon}/> Select</label>
							<input id="fileUpload" type="file"/>
						</div>
						
						<div className="addEventRow">
							<button type="submit">Submit event</button>
						</div>
					</form>
				</div>
			</main>
		);
	}
}

export default AddEvent;
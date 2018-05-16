import React, { Component } from 'react';
import { 
	NavLink,
} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import userIcon from '@fortawesome/fontawesome-free-regular/faUser'
import './Header.css';

class Header extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showDropDown: false
		}
		
		this.toggleMenu = this.toggleMenu.bind(this);
	}
	
	render() {
		return (
			<header>
				<h1>Welcome to TravelBuddy</h1>
				<div id="dropDown">
					<div id="dropDownIcon" onClick={this.toggleMenu}>
						<FontAwesomeIcon icon={userIcon} />
					</div>
					{this.state.showDropDown ? <DropDown /> : null}
				</div>
			</header>
		);
	}
	
	toggleMenu() {
		this.setState({
			showDropDown: !this.state.showDropDown
		})
	}
}

class DropDown extends Component {
	render() {
		return (
			<ul id="menu">
				<li><NavLink to="/login">Login</NavLink></li>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/settings">Settings</NavLink></li>
				<li><NavLink to="/profile">Profile</NavLink></li>
			</ul>
		)
	}
}

export default Header;
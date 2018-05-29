import React, { Component } from 'react';
import { 
	NavLink,
} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import userIcon from '@fortawesome/fontawesome-free-regular/faUser'
import searchIcon from '@fortawesome/fontawesome-free-solid/faSearch'
import './Header.css';
import mainLogo from '../images/logo.jpg';

class Header extends Component {
	render() {
		return (
			<header>
				<NavLink to="/">
				<img className={'mainLogo'} src={mainLogo} alt="mainLogo" />
				<h1 id={'headerText'}>TravelBuddy</h1>
                </NavLink>
				<DropDown />

                <div id="search">
                    <div id="searchIcon">
						<NavLink to="/search"><FontAwesomeIcon icon={searchIcon} /></NavLink>
                    </div>
                </div>
			</header>
		);
	}
}

class DropDown extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showDropDown: false
		}
		
		this.toggleMenu = this.toggleMenu.bind(this);
	}
	
	render() {
		return (
			<div id="dropDown">
				<div id="dropDownIcon" onClick={this.toggleMenu}>
					<FontAwesomeIcon icon={userIcon} />
				</div>
				{this.state.showDropDown ? <Menu /> : null}
			</div>
		)
	}
		
	toggleMenu() {
		this.setState({
			showDropDown: !this.state.showDropDown
		}, ()=>this.listen())
	}
	
	listen() {
		if(this.state.showDropDown) {
			document.addEventListener('click', this.toggleMenu);
		}
		else {
			 document.removeEventListener('click', this.toggleMenu);
		}
	}
}

class Menu extends Component {
	render() {
		return (
			<ul id="menu">
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/login">Login</NavLink></li>
				<li><NavLink to="/profile">Profile</NavLink></li>
				<li><NavLink to="/addEvent">Add Event</NavLink></li>
			</ul>
		);
	}
}

export default Header;
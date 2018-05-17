import React, { Component } from 'react';
import { 
	NavLink,
} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import userIcon from '@fortawesome/fontawesome-free-regular/faUser'
import searchIcon from '@fortawesome/fontawesome-free-solid/faSearch'
import './Header.css';
//import mainLogo from '../images/logo.jpg';

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
{/*
                <img className={'mainLogo'} src={mainLogo} alt="mainLogo" />
*/}
				<h1 id={'headerText'}>TravelBuddy</h1>
				<div id="dropDown">
					<div id="dropDownIcon" onClick={this.toggleMenu}>
						<FontAwesomeIcon icon={userIcon} />
					</div>
					{this.state.showDropDown ? <DropDown /> : null}
				</div>

                <div id="search">
                    <div id="searchIcon">
                        <FontAwesomeIcon icon={searchIcon} />
                    </div>
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
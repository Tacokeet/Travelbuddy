import React, { Component } from 'react';
import { 
	NavLink,
} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-regular/faUser'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import mainLogo from '../images/logo.jpg';

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
                <img className={'mainLogo'} src={mainLogo} alt="gfd" />
				<h1 id={'headerText'}>TravelBuddy</h1>

				<div id="dropDown">
					<div id="dropDownIcon" onClick={this.toggleMenu}>
						<FontAwesomeIcon icon={faCoffee} />
					</div>
					{this.state.showDropDown ? <DropDown /> : null}
				</div>
				<div id={'search'}>
                    <div id="searchIcon">
                        <FontAwesomeIcon icon={faSearch} />
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
			</ul>
		)
	}
}

export default Header;
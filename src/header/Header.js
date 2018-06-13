import React, { Component } from 'react';
import { 
	NavLink,
	BrowserRouter
} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import userIcon from '@fortawesome/fontawesome-free-regular/faUser'
import searchIcon from '@fortawesome/fontawesome-free-solid/faSearch'
import './Header.css';
import mainLogo from '../images/logo.jpg';
import axios from "axios/index";

class Header extends Component {

    state = {
        name: "not logged in"
    }

    constructor(props) {
        super(props);

        const url = "/api/loginCheck"

        axios.get(url)
            .then(response => {
                this.setState({name: response.data.username})
            });
    }


	render() {
		return (
			<header>
				<NavLink to="/">
				<img className={'mainLogo'} src={mainLogo} alt="mainLogo" />
				<h1 id={'headerText'}>TravelBuddy</h1>
                </NavLink>

				<DropDown />
                <div id="search">
                    <h5 id="headerName" >{this.state.name}</h5>
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
			showDropDown: false,
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

    state = {
        check: false,
		showLogin: true
    }

    constructor(props) {
        super(props);

        const url = "/api/loginValue"
        axios.get(url)
            .then(response => {
                this.setState({check: response.data.value});
                this.setState({showLogin: !response.data.value});
            });

    }


	render() {
		return (
			<ul id="menu">
				<a onClick={() => this.dispatchNewRoute('/')}><li>Home</li></a>
				<a onClick={() => this.dispatchNewRoute('/profile')}><li>Profile</li></a>
				<a onClick={() => this.dispatchNewRoute('/addEvent')}><li>Add Event</li></a>
                <a  style={{display: this.state.showLogin ? 'block' : 'none' }}onClick={() => this.dispatchNewRoute('/login')}><li>Login</li></a>
				<a  style={{display: this.state.check ? 'block' : 'none' }} onClick={() => this.dispatchNewRoute('/logout')}><li>logout</li></a>
				{/*<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/login">Login</NavLink></li>
				<li><NavLink to="/profile">Profile</NavLink></li>
				<li><NavLink to="/addEvent">Add Event</NavLink></li>*/}
			</ul>
		);
	}
	
	dispatchNewRoute(route) {
        window.location.href = route
    }
}

export default Header;
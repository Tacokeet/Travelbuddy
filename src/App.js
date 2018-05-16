import React, { Component } from 'react';

import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import Login from './main/user/Login';
import Profile from './main/user/Profile';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import { 
	Route,
	BrowserRouter
} from 'react-router-dom';


class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			
		}
	}
	
  render() {
    return (
		<BrowserRouter>
		
			<div className="App">
	  
				<Header />
				
				<Route exact path="/" component={Main} />
				<Route path="/login" component={Login} />
				<Route path="/profile" component={Profile} />
				
				<Footer />
			
			</div>
			
		</BrowserRouter>
    );
  }

}

export default App;

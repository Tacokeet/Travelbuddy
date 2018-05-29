import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
	render() {
		return (
			<main>
				<div id="signIn">
					<h1 id="signInTitle">Sign in with TravelBuddy</h1>
					
					<RegisterForm />
					<LoginForm />
				</div>
			</main>
		);
	}
}

class LoginForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			email: "",
			password: "",
		}
		
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	render() {
		return (
			<div id="loginForm">
				<h3>Already a member?</h3>
				<form onSubmit={this.handleSubmit}>
					<label>Email address</label>
					<input type="text" name="email" id={'eemail'} value={this.state.email} onChange={this.handleInputChange}/>
					
					<label>Password</label>
					<input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
					
					<label id="forgotPassword"><a href="">Forgot password</a></label>
					
					<button type="submit">Login</button>
				</form>
			</div>
		);
	}
	
	handleInputChange(event) {
		const targetField = event.target;
		const value = targetField.value;
		const field = targetField.name;
		this.setState({
			[field]: value,
		});
	}
	
	handleSubmit(event) {
		alert("Logged in! " + this.state.email + ": " + this.state.password);
	}
}

class RegisterForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			username: "",
			email: "",
			password: "",
		}
		
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	render() {
		return (
			<div id="registerForm">
						<h3>Register</h3>
						<form onSubmit={this.handleSubmit}>
							<label>Username</label>
							<input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}/>
					
							<label>Email address</label>
							<input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}/>
							
							<label>Password</label>
							<input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
							
							<button type="submit">Register</button>
						</form>
					</div>
		);
	}
	
	handleInputChange(event) {
		const targetField = event.target;
		const value = targetField.value;
		const field = targetField.name;
		this.setState({
			[field]: value
		});
	}
	
	handleSubmit(event) {
		alert("Register successful! " + this.state.email + ": " + this.state.password);
	}
}

export default Login;
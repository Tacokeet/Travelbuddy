import React, { Component } from 'react';

class Login extends Component {
	render() {
		return (
			<main>
				<div id="signIn">
					<h1>Sign in</h1>
					
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
					<input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}/>
					
					<label>Password</label>
					<input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
					
					<label><a href="">Forgot password</a></label>
					
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
			firstName: "",
			lastName: "",
			birthDate: "",
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
							<label>First name</label>
							<input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange}/>
							
							<label>Last name</label>
							<input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange}/>
							
							<label>Date of birth</label>
							<input type="date" name="birthDate" value={this.state.birthDate} onChange={this.handleInputChange}/>
					
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
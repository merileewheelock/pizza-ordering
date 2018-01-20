import React, { Component } from 'react';
import  {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LoginAction from '../actions/LoginAction';

class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
			loginMessage: "",
			formError: false
		}
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(event){
		event.preventDefault();
		var username = event.target[0].value
		var password = event.target[1].value
		var error = false;

		if(error){
			this.setState({
				formError: true,
			}) 
		}else{
			this.props.loginAction({
				username: username,
				password: password
			});
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.loginResponse.msg === 'loginSuccess'){
			this.props.history.push('/edit');
		}else if(nextProps.loginResponse.msg === 'badUsername'){
			this.setState({
				loginMessage: "Sorry, that is not a valid username."
			})
		}else if(nextProps.loginResponse.msg === 'wrongPassword'){
			this.setState({
				loginMessage: "Password is incorrect."
			})
		}
	}

	render(){
		return(
			<div className="login container">
				<div className="col-sm-4 col-sm-offset-4">
				<h1 className="login-header text-center">Admin Login</h1>
				<h3 className="login-text text-center">{this.state.loginMessage}</h3>
					<form onSubmit={this.handleLogin}>
						<div className="form-group">
							<label htmlFor="usr" className="login-text">Name:</label>
							<input type="text" className="form-control" id="usr" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd" className="login-text">Password:</label>
							<input type="password" className="form-control" id="pwd" />
						</div>
						<div className="text-center">
							<button className="btn btn-default login-btn" type="submit">Login</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		loginResponse: state.loginReducer
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		loginAction: LoginAction
	}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
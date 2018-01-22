import React from 'react';
import LoginAction from '../actions/LoginAction';
import config from '../config';

describe('Login', ()=>{
	it('fetches Login from backend', function(){
		const loginResult = LoginAction();
		expect(loginResult.type).toBe('LOGIN');
	});

	it('returns with data', function(){
		const loginResult = LoginAction();
		expect(loginResult.payload).not.toBeNull();
	});

	it('goes to correct login address', function(){
		const loginResult = LoginAction();
		const address = config.hostAddress + '/login';
		expect(address).toEqual('http://127.0.0.1:3000/login');
	});
});
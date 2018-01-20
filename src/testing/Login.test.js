import React from 'react';
import { shallow } from 'enzyme';
import Login from '../containers/Login';

describe('Login', ()=>{
	it('renders without crashing', function(){
		const div = document.createElement('div');
		ReactDOM.render(<Login />, div);
	});
});
import React from 'react';
import Admin from '../components/Admin';
import TestRenderer from 'react-test-renderer';

it('renders correctly', ()=>{
	const tree = TestRenderer
		.create(<Admin></Admin>)
		.toJSON();
	expect(tree).toMatchSnapshot();
})
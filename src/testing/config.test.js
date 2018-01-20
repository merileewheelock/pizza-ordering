import React from 'react';
import config from '../config';

test('Config file should load', ()=>{
	const address = "http://127.0.0.1:3000";
	expect(config.hostAddress).toEqual(address);
})
import React from 'react';
import Order from '../components/Order';
import TestRenderer from 'react-test-renderer'; // ES6

it('renders correctly', () => {
    const tree = TestRenderer
        .create(<Order></Order>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
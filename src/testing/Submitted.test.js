import React from 'react';
import Submitted from '../components/Submitted';
import TestRenderer from 'react-test-renderer'; // ES6

it('renders correctly', () => {
    const tree = TestRenderer
        .create(<Submitted></Submitted>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
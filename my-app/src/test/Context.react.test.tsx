import React from 'react';
import renderer from 'react-test-renderer';
import {GlobalProvider} from '../components/GlobalProvider';

it('renders correctly', () => {
    const tree = renderer
        .create(<GlobalProvider/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
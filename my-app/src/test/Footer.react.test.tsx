
import React from 'react';
import renderer from 'react-test-renderer';
import {GlobalProvider} from "../components/GlobalProvider";
import {Footer} from '../components/Footer';

it('renders correctly', () => {
    const tree = renderer
        .create(<GlobalProvider><Footer footerID={3} changePoem={(temp: number) => console.log(temp)}/></GlobalProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
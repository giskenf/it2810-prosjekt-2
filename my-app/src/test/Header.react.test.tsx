
import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from '../components/Header';
import {GlobalProvider} from "../components/GlobalProvider";

it('renders correctly', () => {
    const tree = renderer
        .create(<GlobalProvider><Header/></GlobalProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


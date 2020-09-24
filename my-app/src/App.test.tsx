import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

beforeEach(()=>{
  /*Kjøres før hver test*/
})



test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("App rendrer",() =>{
  const {container} = render(<App/>)
  expect(container.innerHTML).toMatch("test")
  /*expect(container).toMatchSnapshot()*/
})
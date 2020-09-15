import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './index.css';


export class App extends React.Component {
  render() {
    return (
        <>
          <Header />
          <Footer />
        </>
    );
  }

}

export default App;

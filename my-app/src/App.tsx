import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {Middlepage} from './components/Middlepage';
import{Art} from './components/Art';
import {TabsBar} from './components/TabsBar';
import './index.css';

export class App extends React.Component {
  render() {
    return (
        <>
            <Header>
            </Header>
          <Middlepage/>
          <Footer/>
        </>
    );
  }

}

export default App;

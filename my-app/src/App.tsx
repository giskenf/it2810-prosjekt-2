import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {Middlepage} from './components/Middlepage';
<<<<<<< HEAD
import './index.css';



=======
import{Art} from './components/Art';
import {TabsBar} from './components/TabsBar';
import './index.css';

>>>>>>> 7f4922ed96168841b59d8de98c02712b7e976351
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
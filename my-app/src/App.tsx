import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {Middlepage} from './components/Middlepage';
import './index.css';
import {Context} from './Context';

export function App(){
    return (
        <>
            <Context.Provider value={null}>
            <Header>
            </Header>
            <Middlepage/>
            <Footer/>
            </Context.Provider>
        </>
    );

}

export default App;
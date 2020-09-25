import logo from './logo.svg';
import './App.css';
import React, {useContext, useState} from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {Middlepage} from './components/Middlepage';
import './index.css';
import {GlobalProvider} from "./components/GlobalProvider";



function App(){

    return (
        <>
            <GlobalProvider>
            <Header>
            </Header>
            <Middlepage/>
            <Footer/>
            </GlobalProvider>
        </>
    );
}

export default App;
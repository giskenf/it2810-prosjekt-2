import logo from './logo.svg';
import './App.css';
import React, {useContext, useState} from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {Middlepage} from './components/Middlepage';
import './index.css';

import{Art} from './components/Art';
import {TabsBar} from './components/TabsBar';
import './index.css';
import {ButtonContext} from "./components/ButtonContext";

function App() {
    const buttonContext = useContext(ButtonContext);


    return (
        <div>
         <ButtonContext.Provider value={buttonContext}>

            <Header>
            </Header>
            <Middlepage/>
            <Footer/>
         </ButtonContext.Provider>
        </div>
    );


}

export default App;
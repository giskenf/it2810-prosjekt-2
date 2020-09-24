import logo from './logo.svg';
import './App.css';
import React, {useContext, useState} from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {Middlepage} from './components/Middlepage';
import './index.css';
import {ButtonContext,ThemeContext} from "./components/ButtonContext";



function App(){
    const [selectedOption, setSelectedOption] = useState(1);
    const [selectedTheme, setSelectedTheme] = useState(1);

    return (
        <>
            <ThemeContext.Provider value={{selectedTheme,setSelectedTheme}}>
            <ButtonContext.Provider value={{selectedOption,setSelectedOption}}>
            <Header>
            </Header>
            <Middlepage/>
            <Footer/>
            </ButtonContext.Provider>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
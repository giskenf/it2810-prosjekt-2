import React, {useContext, useState} from 'react';
import './Footer.css'
import {RadioButton} from './RadioButton'
import {ButtonContext} from "./ButtonContext";





export const Footer: React.FC = () => {
    const {selectedOption,setSelectedOption} = useContext(ButtonContext)
    console.log(selectedOption)
    return (
        <>
            <div className = "BackgroundFooter" id={selectedOption}>
                <div className = "NavArea">
                    <div className="break"></div>
                    <nav className="Nav">
                        <RadioButton/>
                    </nav>
                </div>
            </div>
        </>
    );
};
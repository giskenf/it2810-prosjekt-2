import React, {useContext, useState} from 'react';
import './Footer.css'
import {RadioButton} from './RadioButton'
import {GlobalContext} from "./GlobalProvider";





export const Footer: React.FC = () => {
    const {themeProvider} = useContext(GlobalContext)

    return (
        <>
            <div className = "BackgroundFooter" id={themeProvider.selectedTheme}>
                <div className = "NavArea">
                    <div className="break"></div>
                    <nav className="Nav">
                        <RadioButton/>
                    </nav>
                </div>
                <div>TEST1</div>
                <div>TEST2</div>
            </div>
        </>
    );
};
import React, {useContext, useState} from 'react';
import './Footer.css'
import {ThemeButton} from './ThemeButton'
import {SongButton} from "./SongButton";
import {GlobalContext} from "./GlobalProvider";





export const Footer: React.FC = () => {
    const {themeProvider} = useContext(GlobalContext)

    return (
        <>
            <div className = "BackgroundFooter" id={themeProvider.selectedTheme}>
                <div >Choose theme
                   <ThemeButton/>
                </div>
                <div>Choose song
                    <SongButton/>
                </div>
                <div>Choose poem</div>
            </div>
        </>
    );
};
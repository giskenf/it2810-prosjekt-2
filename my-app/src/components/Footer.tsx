import React, {useContext, useState} from 'react';
import './Footer.css'
import {ThemeButton} from './ThemeButton'
import {SongButton} from "./SongButton";
import {SessionStore} from "./SessionStore";
import {Button} from "./Button"
import {GlobalContext} from "./GlobalProvider";

interface footerProps{
    changePoem:(a: number)=>void;
}

export const Footer: React.FC<footerProps> = (props: footerProps) => {
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
                <div>Choose poem
                    <Button changePoem={props.changePoem}/>
                </div>
                <div>Choose kombo
                    <SessionStore/>
                </div>
            </div>
        </>
    );
};
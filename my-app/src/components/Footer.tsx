import React, {useContext, useState} from 'react';
import './Footer.css'
import {ThemeButton} from './ThemeButton'
import {SongButton} from "./SongButton";
import {SessionStore} from "./SessionStore";
import {Button} from "./Button"
import {GlobalContext} from "./GlobalProvider";

interface footerProps{
    changePoem:(a: number)=>void;
    footerID: number
}

export const Footer: React.FC<footerProps> = (props: footerProps) => {
    const {themeProvider} = useContext(GlobalContext)

    return (
        <>
            <div className = "BackgroundFooter" id={themeProvider.selectedTheme}>
                <div>Choose a theme/song combination
                    <SessionStore/>
                </div>
                <div >Choose theme
                    <ThemeButton/>
                </div>
                <div>Choose song
                    <SongButton/>
                </div>
                <div>Choose poem
                    <Button changePoem={props.changePoem} poemID={props.footerID} />
                </div>
            </div>
        </>
    );
};
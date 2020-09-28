import React, {useState, useContext, useEffect} from "react";
import './Footer.css';
import {GlobalContext} from "./GlobalProvider";

export function SessionStore(props: any){
    const {themeProvider} = useContext(GlobalContext);
    const {songProvider} = useContext(GlobalContext);
    const [value, setValue] = useState(false);
    const [value2, setValue2] = useState(false);

    if (value){
        //console.log(themeProvider.selectedTheme);
        if(themeProvider.selectedTheme == 1 || songProvider == "Song"){
            window.alert("Du har ikke valgt et tema!");
        }
        sessionStorage.setItem('theme' , themeProvider.selectedTheme);
        sessionStorage.setItem('song', songProvider.selectedSong);
        setValue(false);
    }

    if (value2){
        const theme = sessionStorage.getItem('theme');
        const song = sessionStorage.getItem('song');
        if(theme == '1' || song=='Song'){
            window.alert("Du har ikke valgt en kombinasjon!");
        }
        themeProvider.setSelectedTheme(theme);
        songProvider.setSelectedSong(song);
        setValue2(false);
    }

    function removeStorage(){
        sessionStorage.clear();
    }

    return(
        <>
            <div>
                <button className="buttons"  onClick={()=>setValue(true)}>Save combo</button>
            </div>
            <div>
                <button className="buttons"  onClick={()=>setValue2(true)}>Show combo</button>
            </div>
            <div>
                <button className="buttons"  onClick={()=>removeStorage()}>Delete combo</button>
            </div>
        </>
    )
}
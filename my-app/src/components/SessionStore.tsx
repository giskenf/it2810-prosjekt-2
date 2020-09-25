import React, {useState, useContext, useEffect} from "react";
import './Footer.css';
import {GlobalContext} from "./GlobalProvider";

export function SessionStore(props: any){
    const {themeProvider} = useContext(GlobalContext);
    //const {songProvider} = useContext(GlobalContext);  /Må gjøre det samme bare for songProvider
    const [value, setValue] = useState(false);
    const [value2, setValue2] = useState(false);

    if (value){
        //console.log(themeProvider.selectedTheme);
        if(themeProvider.selectedTheme == 1){
            window.alert("Du har ikke valgt et tema!");
        }
        sessionStorage.setItem('theme' , themeProvider.selectedTheme);
        setValue(false);
    }

    if (value2){
        const theme = sessionStorage.getItem('theme');
        if(theme == '1'){
            window.alert("Du har ikke valgt en kombinasjon!");
        }
        themeProvider.setSelectedTheme(theme);
        setValue2(false);
    }

    function removeStorage(){
        sessionStorage.clear();
    }

    return(
        <>
            <div>
                <button className="buttons"  onClick={()=>setValue(true)}>Large kombinasjon</button>
            </div>
            <div>
                <button className="buttons"  onClick={()=>setValue2(true)}>Vise kombinasjon</button>
            </div>
            <div>
                <button className="buttons"  onClick={()=>removeStorage()}>Slett kombinasjon</button>
            </div>
        </>
    )
}
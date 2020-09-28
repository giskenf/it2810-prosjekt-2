
import React, {useContext, useState} from "react";
import {GlobalContext} from "./GlobalProvider";

export function ThemeButton(){

    const {themeProvider} = useContext(GlobalContext)
    function handleClick(e: any){

    }
    return (
        <div className="radioButtonsContainer">
            <div className="radioButtons">
                <div>
                    <input type="radio" onChange={() => themeProvider.setSelectedTheme('nightTheme')} checked={themeProvider.selectedTheme === "nightTheme"}/>
                    Night
                </div>
                <div>
                    <input type="radio" onChange={() => themeProvider.setSelectedTheme('dayTheme')} checked={themeProvider.selectedTheme === "dayTheme"}/>
                    Day
                </div>
                <div>
                    <input type="radio" onChange={() => themeProvider.setSelectedTheme('jungleTheme')} checked={themeProvider.selectedTheme === "jungleTheme"}/>
                    Jungle
                </div>
                <button className="NavButton"  onClick={()=>themeProvider.setSelectedTheme(1)} >Reset </button>
            </div>
        </div>)


}

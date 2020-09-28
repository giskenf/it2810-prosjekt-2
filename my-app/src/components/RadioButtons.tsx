import React, {useContext, useState} from "react";
import {GlobalContext} from "./GlobalProvider";


export function RadioButton(){
    const {themeProvider} = useContext(GlobalContext)

    return (

        <div className="radioButtonsContainer">
            <div className="radioButtons">
                <div>Night
                    <input type="radio" onChange={() => themeProvider.setSelectedTheme('nightTheme')} checked={themeProvider.selectedTheme === "nightTheme"}/>
                </div>
                <div>Day
                    <input type="radio" onChange={() => themeProvider.setSelectedTheme('dayTheme')} checked={themeProvider.selectedTheme === "dayTheme"}/>
                </div>
                <div>Jungle
                    <input type="radio" onChange={() => themeProvider.setSelectedTheme('jungleTheme')} checked={themeProvider.selectedTheme === "jungleTheme"}/>
                </div>
                <button className="NavButton"  onClick={()=>themeProvider.setSelectedTheme(1)} >Reset </button>
            </div>
        </div>

    )


}

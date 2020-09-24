import React, {useContext, useState} from "react";
import {ButtonContext} from "./ButtonContext";

export function RadioButton(){


    const {selectedOption, setSelectedOption} = useContext(ButtonContext);

    function handleClick(e: any){

    }
    console.log(selectedOption)


    return (
        <div className="radioButtonsContainer">
            <div className="radioButtons">
                <input type="radio" onChange={() => setSelectedOption('nightTheme')} checked={selectedOption === "nightTheme"}/>
                <input type="radio" onChange={() => setSelectedOption('art2')} checked={selectedOption === "art2"}/>
                <input type="radio" onChange={() => setSelectedOption('art3')} checked={selectedOption === "art3"}/>
            </div>
        </div>)


}

import React, {useContext, useState} from "react";
import {GlobalContext} from "./GlobalProvider";

interface ButtonProps{
    changePoem:(a: number)=>void;
}
export function Button(props: ButtonProps){

    const {songProvider} = useContext(GlobalContext)

    return (
        <div className="radioButtonsContainer">
            <div className="radioButtons">
                <div>
                    <input type="radio" onChange={() => props.changePoem(2)}/>
                    Electronica
                </div>
                <div>
                    <input type="radio" onChange={() => props.changePoem(5)}/>
                    Piano
                </div>
                <div>
                    <input type="radio" onChange={() => songProvider.setSelectedSong('Rock')} checked={songProvider.selectedSong === "Rock"}/>
                    Rock
                </div>
                <button  onClick={()=>songProvider.setSelectedSong('Song')} >Reset </button>
            </div>
        </div>)


}
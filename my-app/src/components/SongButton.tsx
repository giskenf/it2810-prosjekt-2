import React, {useContext} from "react";
import {GlobalContext} from "./GlobalProvider";

export function SongButton(){

    const {songProvider} = useContext(GlobalContext)

/*Bruker funksjonen setSelectedSong for å endre sang*/

    return (
        <div className="radioButtonsContainer">
            <div className="radioButtons">
                <div>
                    <input type="radio" onChange={() => songProvider.setSelectedSong('Electronica')} checked={songProvider.selectedSong === "Electronica"}/>
                    Electronica
                </div>
                <div>
                    <input type="radio" onChange={() => songProvider.setSelectedSong('Piano')} checked={songProvider.selectedSong === "Piano"}/>
                    Piano
                </div>
                <div>
                    <input type="radio" onChange={() => songProvider.setSelectedSong('Rock')} checked={songProvider.selectedSong === "Rock"}/>
                    Rock
                </div>
                <button   onClick={()=>songProvider.setSelectedSong('Song')} >Reset </button>
            </div>
        </div>)
}
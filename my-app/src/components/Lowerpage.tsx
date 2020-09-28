import React, {useState} from "react";
import {Middlepage} from "./Middlepage";
import {Footer} from "./Footer";
import {render} from "react-dom";

interface lowerpageProps{

}

export const Lowerpage= (props: lowerpageProps) =>{
    const[selectedPoem, setSelectedPoem] = useState(3)
    const[selectedSong, setSelectedSong] = useState("Song")

    return(
        <div>
            <Middlepage MiddlepageId={selectedPoem}/>
            <Footer changePoem={setSelectedPoem}/>
        </div>
    )

}
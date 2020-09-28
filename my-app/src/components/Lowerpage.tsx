import React, {useState} from "react";
import {Middlepage} from "./Middlepage";
import {Footer} from "./Footer";
import {render} from "react-dom";

interface lowerpageProps{

}

export const Lowerpage= (props: lowerpageProps) =>{
    const[selectedPoem, setSelectedPoem] = useState(0)
    const[selectedSong, setSelectedSong] = useState("Song")

    return(
        <div className="Lowerpage">
            <Middlepage MiddlepageId={selectedPoem}/>
            <Footer changePoem={setSelectedPoem} footerID={selectedPoem}/>
        </div>
    )

}
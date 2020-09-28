import React, {useContext, useState} from "react";
import "./Middlepage.css";
import {Art} from './Art';
import {Frame, Frame_underwater, Frame_space, Frame_space2,Frame_desert} from './SVGComponent';
import {Poems} from './Text';
import {Sound} from "./Sound";
import {GlobalContext} from "./GlobalProvider";

interface MiddlepageProps {
    MiddlepageId:number
}

/*Midterste del av siden, med elemntene Art, Poem og Sound*/
/*Benytter context for å vise sang og ulike bilder. Komponenthierarki brukes for å sende ulike
* verdier og funksjoner forbundet med endring av tekst.*/

export const Middlepage: React.FC<MiddlepageProps> = (props:MiddlepageProps) => {
    const{themeProvider} = useContext(GlobalContext)
    const{songProvider} = useContext(GlobalContext)

    return(
        <>
            <div className="Middlepage" id={themeProvider.selectedTheme}>
                <div className="Pictures">
                    <Art/>
                </div>
                <div className="Kol2">
                    <Poems poemID={props.MiddlepageId}/>

                    <h4>{songProvider.selectedSong}</h4>
                    <Sound/>
                </div>
            </div>
        </>
    );

};
import React, {useContext, useState} from "react";
import "./Middlepage.css";
import {Art} from './Art';
import {Frame, Frame_underwater, Frame_space, Frame_space2,Frame_desert} from './SVGComponent';
import {Poems} from './Text';
import {Sound} from "./Sound";
import {TabsBar} from "./TabsBar";
import {GlobalContext} from "./GlobalProvider";

interface MiddlepageProps {
    MiddlepageId:number
}
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
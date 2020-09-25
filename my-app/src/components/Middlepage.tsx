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

                <div className="Picture">
                    <Art/>
                </div>
                <div className="Kol2">
                    <div className="Text"/>
                        <Poems poemID={props.MiddlepageId}/>

                        <div>{songProvider.selectedSong}</div>
                        <Sound/>
                </div>
            </div>
    </>
    );

};


/*
interface Props {
    id:number
}


export const Middlepage: React.FC = () => {
    const{themeProvider} = useContext(GlobalContext)
    const{songProvider} = useContext(GlobalContext)
    function noerart(a:number,b:number): void{
        a+b
    }
    return(
        <>
            <div className="Middlepage" id={themeProvider.selectedTheme}>

                <div className="Picture">
                    <Art artId={1} adding={noerart}/>
                </div>


                <div className="Kol2">
                    <div className="Text"/>
                    <Poems/>
                    <div>{songProvider.selectedSong}</div>
                    <Sound/>
                </div>
            </div>
        </>
    );

};*/

import React, {useContext, useState} from "react";
import "./Art.css";
import fox from '../svg/fox.svg'
import frame1 from '../svg/Dogforeste.svg'
import {GlobalContext} from "./GlobalProvider";
import {Frame, Frame_desert, Frame_space, Frame_space2, Frame_underwater} from './SVGComponent'


interface ArtProps{
    adding?:(a: number,b: number)=>void;
    artId?:number;
}


export const Art: React.FC<ArtProps> = (props: ArtProps) => {

    const {buttonProvider} = useContext(GlobalContext)

    return(
        <>

            {buttonProvider.selectedOption===1 && <Frame/>}
            {buttonProvider.selectedOption===2 && <Frame_desert/>}
            {buttonProvider.selectedOption===3 && <Frame_space/>}
            {buttonProvider.selectedOption===4 && <Frame_underwater/>}
            {buttonProvider.selectedOption===5 && <Frame_space2/>}

        </>
    );

};


/*interface ArtProps{
    adding:(a: number,b: number)=>void;
    artId:number;
}


export const Art: React.FC<ArtProps> = (props: ArtProps) => {

    const {buttonProvider} = useContext(GlobalContext)
    props.adding(7,5);

    return(
        <>

            {props.artId===1 && <Frame/>}
            {props.artId===2 && <Frame_desert/>}
            {buttonProvider.selectedOption===3 && <Frame_space/>}
            {buttonProvider.selectedOption===4 && <Frame_underwater/>}
            {buttonProvider.selectedOption===5 && <Frame_space2/>}

        </>
    );

};*/


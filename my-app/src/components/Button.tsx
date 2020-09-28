import React, {useContext, useState} from "react";
import {GlobalContext} from "./GlobalProvider";

interface ButtonProps{
    changePoem:(a: number)=>void;
    poemID: number;
}
export function Button(props: ButtonProps){

    const {songProvider} = useContext(GlobalContext)

    return (
        <div className="radioButtonsContainer">
            <div className="radioButtons">
                <div>
                    <input type="radio" onChange={() => props.changePoem(2)} checked={props.poemID===2}/>
                    Zima blue
                </div>
                <div>
                    <input type="radio" onChange={() => props.changePoem(3)} checked={props.poemID===3}/>
                    Orchestrate
                </div>
                <div>
                    <input type="radio" onChange={() => props.changePoem(4)} checked={props.poemID===4}/>
                    Farquad
                </div>
                <button  onClick={()=>props.changePoem(Math.floor(Math.random()*9)+1)} >Random poem </button>
            </div>
        </div>)


}
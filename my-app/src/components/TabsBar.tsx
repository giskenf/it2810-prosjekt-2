import React, {useState, useContext, useEffect} from "react";
import './TabsBar.css';
import {GlobalContext} from "./GlobalProvider";

interface tabsProps{
    id?:number;
}
/*const initialState:tabsProps={
    id:1
}*/

export function TabsBar(props: tabsProps){
    const {buttonProvider} = useContext(GlobalContext);
    localStorage.setItem('myValueInLocalStorage', buttonProvider.selectedOption);

    return(
        <>
        <button className="NavButton"  onClick={()=>buttonProvider.setSelectedOption(1)}>Dog</button>
        <button className="NavButton"  onClick={()=>buttonProvider.setSelectedOption(2)} >Desert </button>
        <button className="NavButton"  onClick={()=>buttonProvider.setSelectedOption(3)} >Space </button>
        <button className="NavButton"  onClick={()=>buttonProvider.setSelectedOption(4)} >Turtle</button>
        <button className="NavButton"  onClick={()=>buttonProvider.setSelectedOption(5)} >Earth</button>
        </>
        )
}





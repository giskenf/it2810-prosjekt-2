import React, {useState, useContext, useEffect} from "react";
import './TabsBar.css';
import {GlobalContext} from "./GlobalProvider";


interface tabsProps{
    id?:number
}
const initialState:tabsProps={
    id:1
}

export function TabsBar(props: tabsProps){
    const {buttonProvider} = useContext(GlobalContext);

    React.useEffect(() => {
        localStorage.setItem('myValueInLocalStorage', buttonProvider.selectedOption);
    }, [buttonProvider.selectedOption]);
    console.log(localStorage.getItem('myValueInLocalStorage'));



    return(
        <>
        <button className="NavButton"  onClick={()=>buttonProvider.setSelectedOption(1)}>1 </button>
        <button className="NavButton"  onClick={()=>buttonProvider.setSelectedOption(2)} >2 </button>
        <button className="NavButton"  onClick={()=>buttonProvider.setSelectedOption(3)} >3 </button>
        <button className="NavButton"  onClick={()=>buttonProvider.setSelectedOption(4)} >4 </button>
        <button className="NavButton"  onClick={()=>buttonProvider.setSelectedOption(5)} >5 </button>
        </>
        )
}





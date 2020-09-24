import React, {useState, useContext, useEffect} from "react";
import './TabsBar.css';
import {Art} from './Art';
import {ButtonContext} from "./ButtonContext";


interface tabsProps{
    id?:number
}
const initialState:tabsProps={
    id:1
}


export function TabsBar(props: tabsProps){
    const {selectedOption,setSelectedOption} = useContext(ButtonContext)


    return(
        <>
        <button className="NavButton"  onClick={()=>setSelectedOption(1)} >1 </button>
        <button className="NavButton"  onClick={()=>setSelectedOption(2)} >2 </button>
        <button className="NavButton"  onClick={()=>setSelectedOption(3)} >3 </button>
        <button className="NavButton"  onClick={()=>setSelectedOption(4)} >4 </button>
        <button className="NavButton"  onClick={()=>setSelectedOption(5)} >5 </button>

       {/* <button className="NavButton"  onClick={()=>
            setId("image2")} >2 </button>
        <button className="NavButton"  onClick={()=>
            setId("image3")} >3 </button>
        <button className="NavButton"  onClick={()=>
            setId("image4")} >4 </button>
        <button className="NavButton"  onClick={()=>
            setId("image5")} >5 </button>*/}
        </>

        )
}




/*<button id = "Art2" className="NavButton" >2</button>
    <button id = "Art3" className="NavButton" >3</button>
    <button id = "Art4" className="NavButton" >4</button>
    <button id = "Art5" className="NavButton" >4</button>

    {Art.setId={fox}}*/




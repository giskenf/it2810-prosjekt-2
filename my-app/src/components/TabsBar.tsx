import React, {useState, useContext} from "react";
import './TabsBar.css';
import {Art} from './Art';


export function TabsBar(props: any){
    const [id, setId] = useState("image2")

    function handleClick(e: any){
        setId(e.target.id);
        alert(e.target.id);
    }

    return(
        <>
        <button id="image1" className="NavButton"  onChange={(e) =>
           handleClick(e)}>1 </button>
        <button className="NavButton"  onChange={(e) =>
            handleClick(e)} value="image2" >2</button>
        <button className="NavButton" onChange={(e) =>
            handleClick(e)} value="image3" >3</button>
        <button className="NavButton" onChange={(e) =>
                handleClick(e)} value="image4" >4</button>
        <button className="NavButton" onChange={(e) =>
                handleClick(e)} value="image5" >5</button>
        </>
        )

}
/*<button id = "Art2" className="NavButton" >2</button>
    <button id = "Art3" className="NavButton" >3</button>
    <button id = "Art4" className="NavButton" >4</button>
    <button id = "Art5" className="NavButton" >4</button>

    {Art.setId={fox}}*/




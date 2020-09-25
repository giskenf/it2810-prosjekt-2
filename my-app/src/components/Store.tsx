import React, {useState, useContext, useEffect} from "react";
import './TabsBar.css';
import {GlobalContext} from "./GlobalProvider";

export function Store(props: any){
    const {buttonProvider} = useContext(GlobalContext);
    const [value, setValue] = useState(false);
    const [value2, setValue2] = useState(false);
    const [stored,setStored] = useState<string|null>('');
    const num = Number(stored)
    localStorage.setItem('item' , buttonProvider.selectedOption)

    if (value){
        setStored(localStorage.getItem('item'));
        console.log("Favoritt: ", stored);
        setValue(false);
    }

    if (value2){
        if(num == 0){
            window.alert("Du har ikke valgt en favoritt!");
        }
        else{
            //console.log("NUM: ", num);
            buttonProvider.setSelectedOption(num);
            }
        setValue2(false);
        }


    return(
        <>
            <div>Sett som favoritt
                <button className="NavButton"  value={"Sett som favoritt"} onClick={()=>setValue(true)}/>
            </div>
            <div>Vis favoritt
                <button className="NavButton"  value={"Vis favoritt"} onClick={()=>setValue2(true)}/>
            </div>
        </>
    )
}
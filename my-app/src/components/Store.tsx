import React, {useState, useContext, useEffect} from "react";
import './TabsBar.css';
import {GlobalContext} from "./GlobalProvider";

export function Store(props: any){
    const {buttonProvider} = useContext(GlobalContext);
    const [value, setValue] = useState(false);
    const [value2, setValue2] = useState(false);

    if (value){
        localStorage.setItem('item' , buttonProvider.selectedOption)
        setValue(false);
    }

    if (value2){
        const item = localStorage.getItem('item');
        console.log("item: ", item);
        if(item == null){
            window.alert("Du har ikke valgt en favoritt!");
        }
        buttonProvider.setSelectedOption(Number(item));
        setValue2(false);
        }

    function removeFav(){
        localStorage.clear();
    }


    return(
        <>
            <div>
                <button className="StoreButton"  value={"Sett som favoritt"} onClick={()=>setValue(true)}>
                    Sett som favoritt</button>
            </div>
            <div>
                <button className="StoreButton"  value={"Vis favoritt"} onClick={()=>setValue2(true)}>
                    Vis favoritt</button>
            </div>
            <div>
                <button className="StoreButton"  value={"Fjern favoritt"} onClick={()=>removeFav()}>
                    Fjern favoritt</button>
            </div>
        </>
    )
}
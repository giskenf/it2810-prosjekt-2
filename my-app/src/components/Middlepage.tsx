import React, {useState, useContext} from "react";
import "./Middlepage.css";
import {Art} from './Art';
import {Poems} from './Text'
import {RadioButton} from "./RadioButton";
import {ButtonContext, ButtonProvider} from "./ButtonContext";



export function Middlepage() {
    const {selectedState, setSelectedState} = useContext(ButtonContext)

    return(

            <div className="Middlepage">
                <div className="Picture">
                    <Art/>
                </div>
                {console.log(selectedState)}


                <div className="Text"/>
                    <Poems/>
                <div className="Music">MUSIKK</div>
            </div>

    )


}
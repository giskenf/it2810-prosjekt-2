import React from "react";
import "./Middlepage.css";
import {Art} from './Art';
import {Poems} from './Text';



export const Middlepage: React.FC = () => {

    return(
    <>
            <div className="Middlepage">
                <div className="Picture">
                    <Art/>
                </div>
                <div className="Text"/>
                    <Poems/>
                <div className="Music">MUSIKK</div>
            </div>
    </>
    );

}
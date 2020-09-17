import React from "react";
import "./Middlepage.css";
import {Art} from "./Art";



export const Middlepage: React.FC = () => {
    return(
        <>
        <div className="Middlepage">
            <div className="Picture">BILDE 1
                <Art/>
            </div>
            <div className="Text">TEKST</div>
            <div className="Music">MUSIKK</div>
        </div>
        </>
    );

};


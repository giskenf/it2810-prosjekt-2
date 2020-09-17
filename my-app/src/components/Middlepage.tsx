import React from "react";
import "./Middlepage.css";
<<<<<<< HEAD
import {Art} from './Art';
import {Poems} from './Text';
=======
import {Art} from "./Art";
>>>>>>> 7f4922ed96168841b59d8de98c02712b7e976351



export const Middlepage: React.FC = () => {

    return(
<<<<<<< HEAD
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
=======
        <>
        <div className="Middlepage">
            <div className="Picture">BILDE 1
                <Art/>
            </div>
            <div className="Text">TEKST</div>
            <div className="Music">MUSIKK</div>
        </div>
        </>
>>>>>>> 7f4922ed96168841b59d8de98c02712b7e976351
    );

}
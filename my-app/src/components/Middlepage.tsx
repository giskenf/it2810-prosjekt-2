import React from "react";
import "./Middlepage.css";
import {Art} from './Art';
import {Poems} from './Text';
import {Sound} from "./Sound";



export const Middlepage: React.FC = () => {
    return(
    <>
            <div className="Middlepage">
                <div id="animals" className="Picture" >
                    <Art/>
                </div>
                <div className="Kol2">
                    <div className="Text"/>
                        <Poems/>
                        <Sound/>
                </div>
            </div>
    </>
    );

};

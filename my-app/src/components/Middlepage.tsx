import React from "react";
import "./Middlepage.css";
import {Art} from './Art';
import { Fox, Bear } from './SVGComponent';
import {Poems} from './Text';



export const Middlepage: React.FC = () => {
    return(
    <>
            <div className="Middlepage">
                <div id="animals" className="Picture" >
                    <Bear height={50} />
                    <Fox height={50}/>
                </div>
                <div className="Kol2">
                    <div className="Text"/>
                        <Poems/>
                    <div className="Music">MUSIKK</div>
                </div>
            </div>
    </>
    );

};

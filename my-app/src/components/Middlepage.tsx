import React from "react";
import "./Middlepage.css";
import {Art} from './Art';
import {Frame, Fox, Bear, Frame_underwater, Frame_space} from './SVGComponent';
import {Poems} from './Text';
import {Sound} from "./Sound";



export const Middlepage: React.FC = () => {
    return(
    <>
            <div className="Middlepage">
                {/*<div id="animals" className="Picture" >
                    <Bear height={50} />
                    <Fox height={50}/>
                </div>*/}
                <div className="Picture">
                    <Frame/>
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

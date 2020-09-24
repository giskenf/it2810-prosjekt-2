import React, {useContext, useState} from "react";
import "./Middlepage.css";
import {Art} from './Art';
import {Frame, Frame_underwater, Frame_space, Frame_space2,Frame_desert} from './SVGComponent';
import {Poems} from './Text';
import {Sound} from "./Sound";
import {TabsBar} from "./TabsBar";

interface Props {
    id:number
}


export const Middlepage: React.FC = () => {




    return(
    <>
            <div className="Middlepage">

                <div className="Picture">
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

import React, {useContext, useState} from "react";
import "./Art.css";
import {GlobalContext} from "./GlobalProvider";
import {Frame, Frame_desert, Frame_space, Frame_space2, Frame_underwater} from './SVGComponent'


export const Art: React.FC = () => {

    const {buttonProvider} = useContext(GlobalContext)

    return(
        <>
                {buttonProvider.selectedOption===1 && <Frame/>}
                {buttonProvider.selectedOption===2 && <Frame_desert/>}
                {buttonProvider.selectedOption===3 && <Frame_space/>}
                {buttonProvider.selectedOption===4 && <Frame_underwater/>}
                {buttonProvider.selectedOption===5 && <Frame_space2/>}
        </>
    );

};


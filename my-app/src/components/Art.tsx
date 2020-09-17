import React from "react";
import "./Art.css";
import logo from "../logo.svg";
import  {TabsBar} from "./TabsBar";


export const Art: React.FC = (props) => {

    return (
        <>
            <div className="Art">
                <img id="Art1" src={logo}></img>
            </div>
        </>
    );

};
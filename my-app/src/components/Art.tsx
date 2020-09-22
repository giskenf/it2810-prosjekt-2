import React from "react";
import "./Art.css";
import fox from '../svg/fox.svg'
import frame1 from '../svg/Dogforeste.svg'


interface Props{

}

export const Art = (props: Props) => {

    return(

        <>
            <div className="pictures">
                <img className="images" id="img1" src={frame1}></img>
            </div>
        </>
    );

};
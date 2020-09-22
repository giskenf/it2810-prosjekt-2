import React, {useState} from "react";
import "./Art.css";
import fox from '../svg/fox.svg'
import frame1 from '../svg/Dogforeste.svg'


export const Art = () => {
    const [id, setId] = useState(fox);

    return(
        <>
            <div className="Art">
                <img src={id} height="auto" width="auto"/>
            </div>
        </>
    );

};


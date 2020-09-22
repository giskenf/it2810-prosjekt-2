import React, {useState} from "react";
import "./Art.css";
import fox from '../svg/fox.svg'

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


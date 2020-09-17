import React from "react";
import "./Art.css";
import fox from '../svg/fox.svg'

interface Props{

}

export const Art = (props: Props) => {

    return(

        <>
            <div className="Art">
                <svg height="auto" viewBox="0 0 37 58" width="auto" xmlns="http://www.w3.org/2000/svg"><g id="009---Fox" fill="none"><g fill="#e57e25"><path id="Shape" d="m35 29-12.41 24h-20.59c-.30427197-.0014028-.59135261-.1412626-.78-.38l19.78-33.62z"/><path id="Shape" d="m12 12-11 3 2-15z"/><path id="Shape" d="m26 4-5 15-9-7z"/></g><path id="Shape" d="m21 19-19.78 33.62c-.32-.39-.22 1.92-.22-37.62l7 16z" fill="#ecf0f1"/><path id="Shape" d="m21 19-13 12-7-16 11-3z" fill="#f29c1f"/><path id="Shape" d="m37 53-17 5 15-29z" fill="#f29c1f"/></g></svg>
                <img id="img1" src={fox} height="auto" width="auto"/>
            </div>
        </>
    );
};


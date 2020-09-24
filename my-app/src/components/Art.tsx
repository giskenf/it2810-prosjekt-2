import React, {useContext, useState} from "react";
import "./Art.css";
import fox from '../svg/fox.svg'
import frame1 from '../svg/Dogforeste.svg'
import {ButtonContext} from "./ButtonContext";
import {Frame, Frame_desert, Frame_space, Frame_space2, Frame_underwater} from './SVGComponent'



interface ArtProps{
    id?:number;
}


export const Art: React.FC<ArtProps> = (props: ArtProps) => {

    const id = useState(props.id)

    const {selectedOption,setSelectedOption} = useContext(ButtonContext)

    return(
        <>
            <div>
                {selectedOption===1 && <Frame/>}
                {selectedOption===2 && <Frame_desert/>}
                {selectedOption===3 && <Frame_space/>}
                {selectedOption===4 && <Frame_underwater/>}
                {selectedOption===5 && <Frame_space2/>}
            </div>
        </>
    );

};


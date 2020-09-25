import React, {useContext, useState} from 'react';
import {GlobalContext} from "./GlobalProvider";

const song0 = require("../sound/test.mp3");
const song1 = require("../sound/electronica1.mp3");
const song2 = require("../sound/piano1.mp3");
const song3 = require("../sound/rock1.mp3");

export const Sound = () => {
    const{songProvider} = useContext(GlobalContext)
    const [id0,setId0] = useState(song0)
    const [id1,setId1] = useState(song1)
    const [id2,setId2] = useState(song2)
    const [id3,setId3] = useState(song3)


    return(
        <>

            {songProvider.selectedSong==="Electronica" && <audio src={id1} controls preload='auto'/>}
            {songProvider.selectedSong==="Piano" && <audio src={id2} controls preload='auto'/>}
            {songProvider.selectedSong==="Rock" && <audio src={id3} controls preload='auto'/>}
            {songProvider.selectedSong==="Song" && <audio src={id0} controls preload='auto'/>}

        </>
    );

};
import React, {useState} from 'react';
const test = require("../sound/test.mp3");

export const Sound = () => {
    const [id, setId] = useState(test);

    return(
        <>
            <audio src={id} controls preload='auto'/>
        </>
    );

};
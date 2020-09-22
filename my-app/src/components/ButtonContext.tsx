import React, {useState, createContext} from 'react';

export const ButtonContext = createContext({selectedOption: 'art1'});

export const ButtonProvider = (props: any) =>{

   const [selectedOption, setSelectedOption] = useState(ButtonContext)

  return(
       <ButtonProvider value={[selectedOption, setSelectedOption]}> {props.children} </ButtonProvider>
   )





}




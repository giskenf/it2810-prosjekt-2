import React, {createContext} from 'react';

/*
interface IState {
    selectedOption: String;
}



const initialState: String = {
    selectedOption: 'art1'
}

 */

export const ButtonContext = createContext<any>({selectedOption: 'art1'});
/*
export function ButtonProvider(props: any){

   const [selectedOption, setSelectedOption] = useState(ButtonContext)

  return(
       <ButtonProvider value={{selectedOption, setSelectedOption}}> {props.children} </ButtonProvider>
   )
}
 */





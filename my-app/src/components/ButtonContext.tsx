import React, {useState, createContext, useContext, ReactNode} from 'react';



export const ButtonContext = createContext<any>({selectedOption:4});



export const ButtonProvider = (props: any) =>{

    const [selectedOption, setSelectedOption] = useState(ButtonContext)

    return(
        <ButtonProvider value={{selectedOption, setSelectedOption}}> {props.children} </ButtonProvider>
    )

}





/*export function useButtonContext(){
    return useContext(ButtonContext)
}

interface IupdateButtonContext{
    setOption: (option: Option) => void;
}

const UpdateButtonContext = createContext<IupdateButtonContext>({
    setOption: (option:Option) => {}
})

export function useUpdateButtonContext(){
    return useContext(UpdateButtonContext);
}
*/

/*export default function OptionProvider({children}:{children:ReactNode}){
    const [option,updateOption] = useState<Option>()

    const setOption = (o:Option) => {
        updateOption(o)
    };
    return(
        <ButtonContext.Provider value={option}>
            <UpdateButtonContext.Provider value={{setOption}}>
                {children}
            </UpdateButtonContext.Provider>
        </ButtonContext.Provider>

    )
}*/








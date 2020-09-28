import React, {useState, createContext, useContext, ReactNode, useMemo} from 'react';

export const GlobalContext = createContext<any>(1)


export const GlobalProvider = (props: any) =>{

    const [selectedOption, setSelectedOption] = useState(Math.floor(Math.random()*5)+1)
    const [selectedTheme, setSelectedTheme] = useState(1)
    const [selectedSong,setSelectedSong] = useState("Song")

    const buttonProvider = useMemo(() => ({
        selectedOption,setSelectedOption}),[selectedOption,setSelectedOption]);
    const themeProvider = useMemo(() => ({
        selectedTheme,setSelectedTheme}),[selectedTheme,setSelectedTheme]);
    const songProvider = useMemo(() => ({
        selectedSong,setSelectedSong}),[selectedSong,setSelectedSong]);

    return(
        <GlobalContext.Provider value={{buttonProvider,themeProvider,songProvider}}> {props.children} </GlobalContext.Provider>
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








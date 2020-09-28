import React, {useContext} from 'react';
import './Header.css'
import {TabsBar} from "./TabsBar";
import {GlobalContext} from "./GlobalProvider";
import {Store} from "./Store";



export const Header: React.FC = () => {
    const {themeProvider} = useContext(GlobalContext)
    return (
       <>
           <div className = "BackgroundHeader" id={themeProvider.selectedTheme}>
               <div className = "Headline">Museum</div>
               <TabsBar/>
               <Store/>
           </div>
       </>
);
};


import React, {useContext} from 'react';
import './Header.css'
import {TabsBar} from "./TabsBar";
import {GlobalContext} from "./GlobalProvider";
import {Store} from "./Store";



export const Header: React.FC = () => {
    const {themeProvider} = useContext(GlobalContext)
    return (
       <>
           <div className = "Background" id={themeProvider.selectedTheme}>
                   {/*<a className = "Logo" >Tittel</a>
                    <div className="break"></div>
                    <nav className="Nav">
                    </nav>*/}
                   <TabsBar/>
                   <Store/>
           </div>
       </>
);
};


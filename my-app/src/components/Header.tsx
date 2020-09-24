import React from 'react';
import './Header.css'
import {TabsBar} from "./TabsBar";



export const Header: React.FC = () => {
    return (
       <>
           <div className = "Background" >
               <div className = "NavArea">
                    <a className = "Logo" >Tittel</a>
                    <div className="break"></div>
                    <nav className="Nav">
                        <TabsBar/>
                    </nav>
               </div>
           </div>
       </>
);
};


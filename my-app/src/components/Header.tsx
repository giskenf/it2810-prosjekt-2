import React from 'react';
import './Header.css'

export const Header: React.FC = () => {
    return (
       <>
           <div className = "Background" >
               <div className = "NavArea">
                    <a className = "Logo" >Tittel</a>
                   <div className="break"></div>
                    <nav className="Nav">
                        <button className="NavButton">Test</button>
                        <button className="NavButton">Test</button>
                        <button className="NavButton">Test</button>
                        <button className="NavButton">Test</button>
                        <button className="NavButton">Test</button>
                    </nav>
               </div>
           </div>
       </>
);
};


import React from 'react';
import './Footer.css'

export const Footer: React.FC = () => {
    return (
        <>
            <div className = "BackgroundFooter" >
                <div className = "NavArea">
                    <div className="break"></div>
                    <nav className="Nav">
                        <label>
                        <div className ="radioButtonsContainer">
                            <div className="radioButtons">
                                <input type="radio" ></input>
                            </div>
                        </div>
                        </label>
                    </nav>
                </div>
            </div>
        </>
    );
};
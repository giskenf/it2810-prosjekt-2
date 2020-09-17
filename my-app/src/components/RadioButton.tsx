import React, {useState} from "react";


export default function RadioButton(props: any){

    const [selectedOption, setSelectOption] = useState("image2")


    function handleClick(e: any){
        setSelectOption(e.target.value);
    }
    console.log(selectedOption)


        return (
            <div className="radioButtonsContainer">
               <div className="radioButtons">
                    <input type="radio" onChange={(e) => handleClick(e)} checked={selectedOption === "image1"} value="image1" name="Natt"/>
                    <input type="radio" onChange={(e) => handleClick(e)} checked={selectedOption === "image2"} value="image2" name="Dag"/>
                    <input type="radio" onChange={(e) => handleClick(e)} checked={selectedOption === "image3"} value="image3" name="Skumring"/>
                </div>
            </div>)

}
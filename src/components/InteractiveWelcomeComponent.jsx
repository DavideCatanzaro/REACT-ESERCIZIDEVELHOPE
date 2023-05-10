import React, {useState} from "react";
import { Welcome } from "./Props-Passing`name`prop";

function InteractiveWelcome(){
    const [name, setName] = useState("")

    const handleName = (event) =>{
        const newName = event.target.value;
        setName(newName)
    }

    return(
       <div>
        <input type="text" onChange={handleName}/>
        <Welcome name={name}/>
       </div> 
)
}

export default InteractiveWelcome;
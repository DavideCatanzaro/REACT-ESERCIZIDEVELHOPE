import React, { useState } from "react";

function ClickCounter(){
    const [counter, setCounter] = useState(0)
    const upcounter = () =>{
        setCounter(counter + 1)
        
    }
    return(
        <>
        <p>{counter}</p>
        <button type="button" onClick={upcounter}>Up</button>
        </>
    )
}
export default ClickCounter;